import Package.Classes_functions as x                         # 'Package' is directory & 'Classes_functions' is module
# from Package.Module import method_class as x
# from Package.Classes_functions import Dog as x
                    
                    # -><class 'Package.Classes_functions.Dog'>
                    #  because this object belongs to Package named package & Classes_functions module of class name Dog. And type is also printed from that code
a = x.Dog(1,2)
a.bark()
print(type(x))      # -><class 'module'>
                    
