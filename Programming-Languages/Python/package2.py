import sys
sys.path.append('D:\Anynomus\Documents\Programming\Python\Package\Package1')

import module as x

y = x.human()
y.talk()

x.run()

import Package as f
import Package.Package1 as d

print(f.__path__)                   # gives path of the Package as string inside the list
print(d.__path__)                   # gives path of the Package as string inside the list

# print(x.__path__[0])              # gives 'AttributeError' as module/class doesn't have "__path__" attibute
