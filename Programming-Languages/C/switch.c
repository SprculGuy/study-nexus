#include<stdio.h>


int main()
{
	char grade;
	printf("Enter Your Grade: ");
	scanf(" %c", &grade);

	switch(grade)
	{
	case 'A':
		printf("You did great\n");
		break;
	case 'B':
		printf("You did good\n");
		break;	
	case 'C':
		printf("You need to improve\n");
		break;	
	case 'D':
		printf("You got Failed!\n");
		break;
	default:
		printf("Please \"recheck\" the grade you entered...?\n");
	}

	return 0;
}

