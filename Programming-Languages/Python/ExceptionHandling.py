try:
	number = int(input('Enter a Number: '))
	if number%2:
		print(f'{number} is odd')
	else:
		print(f'{number} is even')
except ValueError as error_msg:
	print('Please Enter Valid numeric value!')
	print(error_msg, "\n")
	raise
finally:
	print("x")

