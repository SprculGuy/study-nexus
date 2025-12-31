# Function Decorator - Modify or enhance pre-defined function without changing their definition

def my_decorator(func):                # Definition of decorator function
    def local():
        print("Before function call")
        func()
        print("After function call")
    return local                                    

@my_decorator
def say_hello():                       # as the decorator is defined, say_hello() functions call will automatically calls the decorator function
    print("Hello World!")               # and pass say_hello() function as the argument to the decorator function

say_hello()


def escape_unicode(func):
    def wrap(*argstuple, **kwargsdict):
        x = func(*argstuple, **kwargsdict)
        return ascii(x)
    return wrap

def north_city():
    return 'Tromsʘ'

@escape_unicode
def north_city1():
    return 'Tromsʘ'

@escape_unicode
def north_city2():
    return 'Troms¶'

@escape_unicode
def north_city3():
    return 'Troms⁋'

@escape_unicode
def north_city4():
    return 'Troms⌀'

@escape_unicode
def north_city5():
    return 'Tromsʘ'


print(north_city())
print(north_city1())
print(north_city2())
print(north_city3())
print(north_city4())
print(north_city5())
