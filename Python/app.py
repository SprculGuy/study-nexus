def findStarvation(priorities):
    n = len(priorities)
    starvation = [0] * n

    right_min_val = [0] * n
    right_min_idx = [0] * n
    
    current_min = float('inf')
    current_min_idx = -1

    for i in range(n - 1, -1, -1):
        if priorities[i] < current_min:
            current_min = priorities[i]
            current_min_idx = i
        right_min_val[i] = current_min
        right_min_idx[i] = current_min_idx

    for i in range(n - 1, -1, -1):
        if i == n - 1 or right_min_val[i+1] >= priorities[i]:
            starvation[i] = 0
        else:
            for j in range(n - 1, i, -1):
                if priorities[j] < priorities[i]:
                    starvation[i] = j - i
                    break
                    
    return starvation
print(findStarvation([6,10,9,7]))