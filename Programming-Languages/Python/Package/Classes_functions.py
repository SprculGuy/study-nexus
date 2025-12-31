class Mammal:
    name = 'Global'
    _name = 'Protected'
    __name = 'Private'          # Private members are only be accessed inside that class
    print(__name)

    def __init__(self, a, b):   # Constructor Function - Get exicuted as soon as class object created 
        self.x = a
        self.y = b

    def walk(self, a):
        print('walk', '\n', a, '\n', self.y, '\n')


class Dog(Mammal):

    def bark(self):
        print('bark')


x = Dog(1, 2)
y = Mammal(1, 2)
x.walk(5)
print(x.name)
print(x._name)
print(type(x))      # -><class '__main__.Dog'> 
                    #   because this object belongs to current working module of class name Dog

# Private members are only be accessed inside that class
# print(x.__name)
# print(y.__name)
