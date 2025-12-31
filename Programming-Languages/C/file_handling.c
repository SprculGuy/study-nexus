#include<stdio.h>


int main()
{
	FILE *fpointer1 = fopen("/home/anynomus/Desktop/text.txt","w");	
	fprintf(fpointer1, "Jim > Nice\nAnkit > OP\n");
	fclose(fpointer1);	

	FILE *fpointer3 = fopen("/home/anynomus/Desktop/text.txt","a");	
	fprintf(fpointer3, "Jonny > Good\nRitesh > OvPwr\n");
	fclose(fpointer3);	

	char line[200];
	FILE *fpointer2 = fopen("/home/anynomus/Desktop/text.txt","r");
	fgets(line, 200, fpointer2);
	printf("%s", line);
	fgets(line, 200, fpointer2);
	printf("%s", line);

	fclose(fpointer2);
	

	return 0;
}

