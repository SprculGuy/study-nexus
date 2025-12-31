#include <iostream>

using namespace std;

template<class any_type1, class any_type2> 
    any_type1 function(any_type1 a, any_type2 b)          // Function template Used for same func name but any type of data type
    {                                                     // Function Template = Generic Function
        if(a>b)
            return(a);
        else
            return(b);
    }

template<class any_type1, class any_type2>                // Class Template = Generic class
    class Parent { };



int main()
{
    cout<<function(2,3)<<endl;
    cout<<function(2,3.4)<<endl;
    cout<<function(34,'D')<<endl;
    cout<<function(3.4,6.8)<<endl;
    cout<<function('A','D')<<endl;

    Parent <int, float>obj;
}