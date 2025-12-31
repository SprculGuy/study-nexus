name = 'Ankit'
print("Hello " + name + ''',                                 
nice to meet you''')

name = 'Ritesh'
print('Hello '+ name, end=', ')					
print('nice to meet you...')

name = 'Nikita'
print(f"Hello {name}" ',\nnice to meet you')          # Formated string
print(r"Hello, \n nice to meet you")          # Raw string - '\n' is not considered as new line character
print(rf"Hello {name}, \n nice to meet you")        # and we used more than 1 string type - r & f
print('Hello, it\'s me')
				# (') is treated as inside output string block
print("Hello {} {}" ',\nnice to meet you'.format(name, "Patil"))
