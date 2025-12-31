// Program to print all value of command line argument
// Once we get the value from command line we can use them to solve our problem.

#include <stdio.h>
#include <string.h>
  // this is used for function atoi() for converting string into int

// argc tells the number of arguments
// char *argv[] is used to store the command line arguments in the pointer to char array i.e string format
int main(int argc, char *argv[])
{
    if (argc == 1) 
    {
        printf("No command line argument exist Please provide them first \n"); // means only one argument   exist that is file.exe
        return 0;
    }
    else 
    {
        for (int i = 1; i < argc; i++)       // actual arguments starts from index 1 to (argc-1)
        {
            int value = atoi(argv[i]);
            printf("%d\n", value);
        }
        return 0;
    }
}