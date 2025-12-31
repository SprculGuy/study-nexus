#include<stdio.h>



struct name_
		{
			int a;
			char b;
			char c[23];
			double d;
			
		}obj_global, obj2;
						// creating object right after defining struct
struct name_ obj_global1;
	  
int main()
{	
	struct name_ obj;
	obj.a = 345;
	obj.b = 'f';
//	obj.c[23] : "Ankitgsd";
	obj.d = 345.5454643;
	printf(" %d \n", obj.a);
	printf(" %c \n", obj.b);
	printf(" %s \n", obj.c);
	printf(" %lf \n", obj.d);

	 

	return 0;
}
