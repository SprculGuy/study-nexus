#include<stdio.h>
#include<stdlib.h>



int main()
{
	FILE *fpointer = fopen("/home/anynomus/Desktop/text.dat","wb");	
	char a[] = "Jim > Nice\nAnkit > OP\n";
	fwrite(&a, sizeof(a), 1, fpointer);
	fclose(fpointer);	

	char line[200];
	FILE *fpointer1 = fopen("/home/anynomus/Desktop/text.dat","rb");
	int q;
	q = fread(&line, sizeof(line), 1, fpointer1);
	printf("Content:\n %s \nq = %d \n", line, q);
	fclose(fpointer1);
	

	return 0;
}


