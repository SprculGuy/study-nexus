import math

class InvalidTriangleError(Exception):
    def __init__(self, text, sides):
        super().__init__(text)          # calling parent class
        self._sides = tuple(sides)
    
    def sides(self):
        return self._sides
    
    def __str__(self):
        return f"'{self.args[0]}' for sides {self._sides}"
    
    def __repr__(self):
        return f"InvalidTriangle({self.args[0]}{self._sides})"

def Tarea(a, b, c):
    sides = sorted((a, b, c))
    if sides[2] > sides[0] + sides[1]:
        raise InvalidTriangleError("length of a side of triangle should be less than sum of remaining sides!", sides)
    p = (a + b + c) / 2
    area = math.sqrt(p*(p-a)*(p-b)*(p-c))
    print(area) 

Tarea(3,4,5)
Tarea(3,4,10)