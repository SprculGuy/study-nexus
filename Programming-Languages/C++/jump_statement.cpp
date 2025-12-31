#include<iostream>
#include<stdio.h>
#include<cmath>
#include<string>

using namespace std;


int main()
{	
/*	goto abc;
			invalid due to decleration of attributes must not be jumped...*/
	double x = 5, y = 56;

	cout<< "1" <<endl;
	goto abc;
	cout<< "2" <<endl;
	cout<< "3" <<endl;
	abc:
	cout<< "4" <<endl;
	exit(0);
	cout<< "5" <<endl;
	
	return 0;
}
