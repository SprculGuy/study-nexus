#include <iostream>
#include <fstream>
#include <conio.h>

using namespace std;

int main()
{
    ofstream fout;
    fout.open("D:\\Anynomus\\Documents\\Programming\\C++\\text.txt");           //  "\\"="\"
    fout<<"My name is Ankit";
    fout.close();

    fstream fout1;
    fout1.open("text.txt", ios::app);
    fout1<<"\nMy name is Nikita";
    fout1.close();

    fstream fout2;
    fout2.open("text.txt", ios::app|ios::binary);
    fout2<<"\nMy name is Bharti";
    fout2.close();


    ifstream fin;
    fin.open("D:\\Anynomus\\Documents\\Programming\\C++\\text.txt");
    char ch1;
    while(!fin.eof())
    {
        fin>>ch1;
        cout<<ch1;
    } 
    fin.close();

    cout<<endl;

    fstream fin1;
    fin1.open("text.txt", ios::in);
    char ch2;
    while(!fin1.eof())
    {
        ch2 = fin1.get();
        cout<<ch2;
    }      
    fin1.close();                        

}