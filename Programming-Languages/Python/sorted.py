class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

pl = []
for _ in range(2):
    name = input()
    age = int(input())
    pl.append(Person(name, age))
if pl:
	l = sorted(pl, key=lambda x:x.age, reverse=True)
	for obj in l:
            print(obj.name)
            print(obj.age)