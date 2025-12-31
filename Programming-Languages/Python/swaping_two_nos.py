a = 2
b = 4

temp = a                        # Swaping using third variable
a = b
b = temp

print("a2 : ", a)
print("b4 : ", b)

a = a + b                       # Uses more space for summed number
b = a - b
a = a - b

print("a4 : ", a)
print("b2 : ", b)

a = a ^ b                       # Efficient(Using "EX-OR")
b = a ^ b
a = a ^ b

print("a2 : ", a)
print("b4 : ", b)

a,b = b,a                       # Flawlessly efficient(for python)

print("a4 : ", a)
print("b2 : ", b)