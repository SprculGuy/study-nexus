import os 

directory = "D:\Anynomus\Videos\Study\\2.[Etoos] Foundation (Classes 9th and 10th)\\1.Biology\9th\\4.Why do we fall ill\\"

for filename in enumerate(os.listdir(directory)):
	name = directory + filename[1]
	rename = directory  + filename[1] + ".mp4"
	
	print(name)
	print(rename)
	
	os.rename(name, rename)