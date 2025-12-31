// 1st C Program                                                                one line comment                           


#include<stdio.h>


void hello()
{
	char name[20] = "Ankit";
						 //strings are immutable...                         
	const int AGE = 21; 
					  //constant are also immutable...
	int age;
	printf("Enter your name: ");
/*	scanf("%s", name);
					  takes only one string(till 1st space)*/ 
	fgets(name, 20, stdin);
						  //takes line of strings(with spaces) upto size 20 characters
	printf("Enter your age: ");
	scanf("%d", &age);
	printf("Hello %s, having age %d.\nNice to meet you\n", name, age);
}


int main()
{
	hello();
	return 0;
}

