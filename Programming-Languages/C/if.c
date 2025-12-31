#include<stdio.h>


int if_block()
{
	int num1,num2,num3;
	printf("Enter 1st numbers: ");
	scanf("%d", &num1);
	printf("Enter 2nd numbers: ");
	scanf("%d", &num2);
	printf("Enter 3rd numbers: ");
	scanf("%d", &num3);
	
	int result;
	if(num1 > num2 && num1 > num3)
	{
		result = num1;
	}
	else if(num2 > num1 && num2 > num3)
	{
		result = num2;
	}
	else
	{
		result = num3;
	}

	return result;
}


int main()
{

	printf("Greater No. is: %d\n", if_block());

	return 0;
}

