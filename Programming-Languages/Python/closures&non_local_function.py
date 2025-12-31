
# Closures - maintains references to objects from enclosing scopes
# The criteria that must be met to create closure in Python are summarized in the following points.
    # We must have a nested function (function inside a function).
    # The nested function must refer to a value defined in the enclosing function (nonlocal variable defined in parent function).
    # The enclosing function must return the nested function.


def enclosing():
    v = 10
    w = '5'
    def local():
        return v, w
    return local                                    # after returning the local function, all variables used in local function 
                                                        # are not discarded, Closure remembers the variables to use in local function

lf = enclosing()                                    # after exicution of return statement of enclosing(), ideally all the members of enclosing() should be destroyed
print(lf())
print(lf.__closure__)                               # but closure is used to remember the reference for the members of enclosing() that are used in local()

    

def func1():                                         
    def local_func1():                                  
        return "local1"                            
    print(local_func1())
    return 0                                       

func1()



def func2():
    def local_func2():
        return "local2"                          
    return local_func2()                        # exicute the local function and returns the return value of local function

print(func2())



def func3():
    def local_func3():
        return "local3"                          
    return local_func3                          # passing the local function as object

y=func3()                                   
print(y())
print(func3())

