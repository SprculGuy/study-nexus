lst = [i**2 for i in range(1,11)]
print(lst, "\n")

set = {i**2 for i in range(1,11)}
print(set, "\n")

dictionary = {i:i**2 for i in range(1,11)}
print(dictionary, "\n")

generator_obj = (i**2 for i in range(1,11))
print(type(generator_obj))
print(generator_obj, "\n")

tup = tuple((i**2 for i in range(1,11)))
print(tup, "\n")

lst = [(i*1, j*1)   for i in range(1,3) 
                        for j in range(1,3)]
print(lst)
lst = [(i, j)   for i in range(1,11) 
                    if i>4 
                        for j in range(1,11)
                            if i==j]
print(lst, "\n")

lst = []
for i in range(1+1, 6+1):
    inner = []
    for j in range(1, i):
        inner.append(j)
    lst.append(inner)
print(lst)    

lst = [[j for j in range(1, i)] for i in range(1+1, 6+1)]
print(lst, "\n")
