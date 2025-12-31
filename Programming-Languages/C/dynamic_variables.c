#include<stdio.h>
#include<stdlib.h>



	  
int main()
{	
	float *p;
	p = (float*)malloc(4);		// "malloc" Creates Dynamic Variable of size 4 bytes and returns "void type pointer" of 1st byte
	*p = 3.4;					// so, " float* " used to type cast to "float type pointer" return type
	printf(" %lf \n", *p);


	int *q;
	q = calloc(5,4);								// "malloc" Creates Dynamic Variable 'Array' of 5 items each of 4 bytes and 
	printf("Enter the 5 int values in array: ");	//	returns "void type pointer" of 1st byte of 1st item.
	for(int i=0 ; i<5 ; i++ )
	{
		scanf(" %d", q+i);
	}
	for(int i=0 ; i<5 ; i++)
	{
		printf(" %d \n", *(q+i));
	}	


	return 0;
}
	

