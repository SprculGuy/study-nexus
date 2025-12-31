import Package.Package1.module as x

y = x.human()
y.talk()
x.run()

import Package.Package1 as d

print(d.__path__)                   # gives path of the Package as string inside the list
# print(x.__path__[0])              # gives 'AttributeError' as module/class doesn't have "__path__" attibute
