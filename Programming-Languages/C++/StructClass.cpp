#include<iostream>
#include<stdio.h>
#include<cmath>
#include<string>

using namespace std;
					//refers standart input/output fuctions, like cin, cout, endl


struct StructName
		{	
			int a = 10;
			char b = 'a';
			char c[23] = "AND";
			double d = 5.6;
		};


class ClassName
	{
	public:
		string name;
		int age;
		ClassName(string x)
		{
			cout<< x << endl;
		}
		ClassName()
		{
			cout<< "Without Passing arguments" << endl;
		}

	};


class Student
	{
	public:
		string name = "none";
		char grade = 'X';
		double gpa = 0;
		
		Student(string cname, char cgrade, double cgpa)
		{
			cout<< "Student Name: " << cname <<endl<< "Grade: " << cgrade <<endl<< "GPA: " << cgpa <<endl;
		}
		Student()
		{
			cout<< "Without Passing arguments" << endl;
		}
	};


int main()
{	
	ClassName obj("Calling constructer with arguments");
	ClassName obj1;

	obj.name = "Ankit";	
	obj1.name = "Ritesh";

	cout<< obj.name <<endl<< obj1.name <<endl;
	
	Student obj2("Ankit", 'A', 8.78);
	Student obj3;
	cout<< obj3.name <<endl;
	obj3 = obj2;
	cout<< obj3.name <<endl;

	return 0;
}
