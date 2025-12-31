class Mammal:

    name = 'Global'
    # _name = 'Protected'
    __name = 'Private'          # Private members are only be accessed inside that class

    print(__name)

    def __init__(self, a, b):   # Constructor Function - Get exicuted as soon as class object created 
        self.x = a
        self.y = b

    def walk(self, a):          # Instance method(Because of self)
        print('walk', '\n', a, '\n', self.y,)

    @staticmethod
    def eat(a):                 # Static method
        print('eat', '\n', a)

    @classmethod                # Decorator
    def reproduce(cls):         # Class method
        print('reproduce')


class Dog(Mammal):

    def bark(self):
        print('bark')


x = Dog(1, 2)
x.walk(5)

y = Mammal(3, 4)
y.walk(6)
# y.eat(3)                          Mammal.eat() takes 1 positional argument but 2 were given. i.e., Mammal.eat(y, 3)
# y.eat(a=3)                        Mammal.eat() got multiple values for argument 'a'
Mammal.eat(3)                           # As we won't used 'self' argument for passed object

print(Mammal.name)
print(Dog.name)
# print(Mammal._name)
# print(Dog._name)

# Private members are only be accessed inside that class
# print(Mammal.__name)
# print(x.__name)
# print(y.__name)
 