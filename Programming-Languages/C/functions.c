#include<stdio.h>


char hello(char Name[], int Age)
{
	printf("Hello %s, having age %d.\nNice to meet you\n", Name, Age);
	
	return 'A';
}


int main()
{
	char name[20];
	int age;
	printf("Enter your name: ");
	scanf("%s", name);
	printf("Enter your age: ");
	scanf("%d", &age);

	hello(name,age);
	printf("Your grade is: %c\n", hello(name,age));
	
	return 0;
}

