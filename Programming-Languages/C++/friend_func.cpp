#include <iostream>

using namespace std;

class B;                //declearing class B as at line 12 compiler isn't recognise data type B 
class A
{
    private:
    int a = 2;
    public:
    friend void fun(A, B);          //declearing frind function for class B
    void func()
    {}
};
class B
{
    private:
    int b = 3;
    friend void fun(A, B);          //friend function declearation can be done any scope(public/private)
    public:
    
};
class C
{
    friend void A::func();          //'func' function in class A is friend of class C
    friend class A;                 //class A is friend class of class C
};                                  //all the member functions of class A are friend func of class C

void fun(A o1, B o2)                //defining friend fuction...
{
    cout<<"Sum is "<<o1.a + o2.b;
}

int main()
{
    A obj1;
    B obj2;
    fun(obj1, obj2);
}