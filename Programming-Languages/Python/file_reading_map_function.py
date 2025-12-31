with open("file.txt") as fr:
    
    x = fr.readline().split()
    print(x, '\n')
    
    y = list(map(int, x))
    print(y, '\n')

    y = list(map(int, x[2]))
    print(type(x[2]))
    print(x[2])
    print(y, '\n')

    x = fr.readline()
    print(x)