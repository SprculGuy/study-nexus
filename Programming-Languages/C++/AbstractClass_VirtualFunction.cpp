#include <iostream>

using namespace std;

class A
{
 public:                                 // with assigning value zero a to function, we create 'DO NOTHING FUNCTION' which can't be accessed/called...
    virtual void f1() = 0;              // declearing Pure Virtual function in any class causes class 'A' to becomes Abstract Class
    void f2() {}                        // Class containing Pure Virtual function is Abstract Class, means- we can't create object/instance of Abstract class 
};

class B : public A
{
 public:    
    void f1() {}                        // For Abstract class, we can access members with object of child class
};                                      // But, for valid inheritace, we must override pure virtual function with some code/block


int main()
{
//  A obj1;                             // gives error
    B obj2; 
}