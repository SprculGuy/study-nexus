// 1st C++ Program                                				one line comment


#include<iostream>
#include<cmath>
#include<string>
#include<ctype.h>


int main()
{
	char name[10];
	int age = 21;
	std::cout<< "Enter your name: ";
	std::cin>> name;
	std::cout<< "Hello " << name << ", having age " << age << ".\nNice to meet you... " << std::endl;

	return 0;
}


/*																multy line comment 
# include <iostream>

using namespace std;
					//Refers standard input/output fuctions. Like- cin, cout, endl,...

int main()
{
	cout<<"\tHello World\nThis is my first C++ program\n";
	return 0;
}
*/

