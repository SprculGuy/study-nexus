#                                                        | type code |       Type      |  size(byte)  |
#import array                                         #|      'b'       signed integer        1
from array import array as arr                        #|      'B'       unsigned integer      1
from array import *                                   #|      'u'       Unicode character     2
                                                      #|      'h'       signed integer        2
#arr1 = array.array('i', [1,2,3,4])                   #|      'H'       unsigned integer      2
arr2 = arr('i', {1,2,3,4})                            #|      'i'       signed integer        2
arr3 = array('i', (1,2,3,4))                          #|      'I'       unsigned integer      2
                                                      #|      'l'       signed integer        4
#print('arr1: ', arr1)                                #|      'L'       unsigned integer      4
print('arr2: ', arr2)                                 #|      'q'       signed integer        8
print('arr3: ', arr3)                                 #|      'Q'       unsigned integer      8
                                                      #|      'f'       floating point        4
                                                      #|      'd'       floating point        8
   
