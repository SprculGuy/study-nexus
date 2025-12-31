#include <iostream>
#include <fstream>
#include <conio.h>

using namespace std;

int main()
{
    ifstream fin;
    fin.open("D:\\Anynomus\\Documents\\Programming\\C++\\text.txt");           //  "\\"="\"
  
    int pos = fin.tellg();             // print int position 
    cout<<pos;                          // prints integer posiotion of get/read pointer. Prints '0' as nothing was readed from file in current programme

    char ch;
    fin>>ch;                           // getting/reading one character from file
    cout<<ch;                           

    pos = fin.tellg();
    cout<<pos;                          // Prints '1' as one char is readed...
    fin.close();


    ofstream fout;
    fout.open("D:\\Anynomus\\Documents\\Programming\\C++\\text.txt");
    pos = fout.tellp();
    cout<<pos;                          // prints integer posiotion of put/write pointer. Prints '0' as nothing is written/putten in file in current programme

    fout<<"Ankit";                      // putting/writing 'Ankit' in file
    pos = fout.tellp();
    cout<<pos;                          // Prints '5' as size of string 'Ankit' is 0to4=5

    fout.close();
}