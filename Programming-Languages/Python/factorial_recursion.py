
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

def sum(n):
    if n == 1:
        return 1
    return n + sum(n-1)

def power(x,n):
    if n == 1:
        return x
    else:
        n = n-1
    return x * power(x,n)


print(__name__)                 # Prints out '__main__' as static point of exicution is '__main__' for current module

if __name__ == '__main__':

    n = int(input("Enter the number for calculating Factorial : "))
    print(factorial(n))

    n = int(input("Enter the number for calculating Sum : "))
    print(sum(n))

    x = int(input("Enter the number for calculating Power : "))
    n = int(input(f"Enter the power of you want to calculate of {x} : "))
    print(power(x,n))
    
    
