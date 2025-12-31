class Student:
    def __init__(self, math, sci):
        self.math = math
        self.sci = sci

    def __add__(self, other):
        math = self.math + other.math
        sci = self.sci + other.sci
        student3 = Student(math, sci)
        return student3
    
    def __gt__(self, other):                    # gt == greater then
        stud1 = self.math + self.sci
        stud2 = other.math + other.sci
        if stud1 > stud2:
            return True
        else:
            return False 

    def walk(self):
        print("Student Walk")

    def sum(self, a=None, b=None, c=None):
        s = 0
        if a != None and b != None and c != None:
            s = a+b+c
        elif a != None and b != None:
            s = a+b
        else:
            s = a

        return s


class Man:
    def move(self, movement):
        movement.walk()


class Worker(Man):
    def move(self, movement):                 # Method Overriding
        movement.walk()



    def walk(self):                           
        print("Worker Walk")





movement = Student(4, 5)        
man1 = Man()
man1.move(movement)

movement = Worker()                     # Duck Typing - Changing the type
man2 = Man()
man2.move(movement)



print('\n\n')



student1 = Student(8, 9)
student2 = Student(6, 7)

print(student1.sum(1,2,3))              # Method Overloading

student3 = student1 + student2          # Operator Overloading
if student1 > student2:                 # Operator Overloading
    print("Yes")
else:
    print("No")
print(student3.math)
print(student3.sci)




