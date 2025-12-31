#from module import method1, method2...
#from module import *
import time as z                            # Module 'time' is imposted as 'z'
print(z.strftime('%Y-%m(%B)-%d  %H:%M:%S %A'))

#from time import *
from time import strftime                   # 'strftime'(string-format-time) can be Method/Class defined in 'time' Module
print(strftime('%D'))

#import time.strftime as z                  # Gives error as time is not package
from time import strftime as z
print(z('%D'))

import datetime
x=datetime.date.today()
print(x)
dictionary = {0:'Monday', 1:'Tuesday', 2:'Wednesday', 3:'Thursday', 4:'Friday', 5:'Saturday', 6:'Sunday'}
print(dictionary[x.weekday()])                          
# print(x)
