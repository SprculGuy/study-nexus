class Base: 
    def __init__(self): 
        self.a = "GeeksforGeeks"            # public   
        self._b = "GeeksforGeeks"           # protected - only accessible in base and derived class 
        self.__c = "GeeksforGeeks"          # private - accessible in only base class
  
# Creating a derived class 
class Derived(Base): 
    def __init__(self): 
        # Calling constructor of Base class 
        Base.__init__(self) 
        print("Calling private member of base class: ") 
        print(self._b)
        print(self.__c)     # gives error


obj = Derived()
obj._b  # gives error