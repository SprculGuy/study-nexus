import boto3
from boto3.dynamodb.conditions import Key
from botocore.config import Config
from concurrent.futures import ThreadPoolExecutor
import time

# --- CONFIGURATION ---
# Adaptive mode handles 'ProvisionedThroughputExceededException' automatically
config = Config(retries={'max_attempts': 10, 'mode': 'adaptive'})
dynamodb = boto3.resource('dynamodb', config=config)

table1 = dynamodb.Table('Table1')
table2 = dynamodb.Table('Table2')

# Define your Primary Key name (Replace 'id' with your actual PK column name)
PK_NAME = 'id' 

# --- FUNCTIONS ---

def get_table1_items(start_date, end_date):
    """
    Step 1: Query Table1. 
    Using a Loop/Paginator prevents 'LastEvaluatedKey' issues if data is large.
    """
    results = []
    # Assuming you have a GSI or Primary Key on date, or simple Scan if not.
    # Adjust KeyConditionExpression to match your schema.
    response = table1.scan(
        FilterExpression=Key('date').between(start_date, end_date)
    )
    results.extend(response['Items'])

    while 'LastEvaluatedKey' in response:
        response = table1.scan(
            FilterExpression=Key('date').between(start_date, end_date),
            ExclusiveStartKey=response['LastEvaluatedKey']
        )
        results.extend(response['Items'])
    
    print(f"fetched {len(results)} items from Table1.")
    return results

def check_existence(item):
    """
    Helper function to check a SINGLE item against Table2.
    Returns the item if it exists in Table2, else None.
    """
    try:
        # We only need the Key to check existence
        key_value = item[PK_NAME]
        
        # 'get_item' is faster and cheaper than 'query' for single record checks
        resp = table2.get_item(Key={PK_NAME: key_value})
        
        if 'Item' in resp:
            return item  # Found in Table2 (Processed)
        else:
            return None  # Not in Table2 (Unprocessed)
            
    except Exception as e:
        print(f"Error checking item {item}: {e}")
        return None

def separate_processed_unprocessed(items):
    """
    Step 2 & 3: Check existence in PARALLEL.
    """
    processed = []
    unprocessed = []

    # ThreadPoolExecutor runs multiple network requests at the same time.
    # For 1 DPU, 10-20 workers is usually the sweet spot.
    with ThreadPoolExecutor(max_workers=20) as executor:
        # This maps the function over the list and returns results in order
        results = executor.map(check_existence, items)

    # Reconstruct the lists based on results
    for original_item, result in zip(items, results):
        if result:
            processed.append(original_item)
        else:
            unprocessed.append(original_item)

    print(f"Processed: {len(processed)} | Unprocessed: {len(unprocessed)}")
    return processed, unprocessed

def batch_delete_from_table1(items_to_delete):
    """
    Step 4: Delete from Table1 using BatchWriter.
    """
    if not items_to_delete:
        print("No items to delete.")
        return

    # batch_writer automatically handles buffering and retries
    with table1.batch_writer() as batch:
        for item in items_to_delete:
            # Only send the Primary Key for deletion to save bandwidth
            batch.delete_item(Key={PK_NAME: item[PK_NAME]})
            
    print(f"Successfully deleted {len(items_to_delete)} items from Table1.")

# --- MAIN EXECUTION ---

# 1. Fetch
start = '2023-01-01'
end = '2023-01-31'
list1 = get_table1_items(start, end)

# 2 & 3. Check & Separate (Parallelized)
processed_list, unprocessed_list = separate_processed_unprocessed(list1)

# 4. Delete Processed (Batched)
batch_delete_from_table1(processed_list)