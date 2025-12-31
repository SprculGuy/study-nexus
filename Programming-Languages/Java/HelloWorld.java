import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

import java.util.Scanner;

/*
    classpath - variable contains roots of all directories of java packages of java classes, 
                and thats how the java compiler finds out all the standard java libraries 
*/


public class HelloWorld                    // ClassName - PascalConvention
{                                                   // void   - return type of function
    public static void main(String args[]) throws IOException  // public - scope of function           // functionName - camelCaseConvention
    {                                               // static - gives ability to get exicuted(called) without creating any object of class or to treat the function as it is outside of class 
        String name = "Ankit";                      // args   - argument defining
        System.out.println("Hello World");                    // "out"- output stream object, System.out is output stream for standard output device(monitor using terminal/cmdline)
        System.out.println(name);                               // println gives new line after execution of print
        System.out.print("Hello");                       
        System.out.println(name);

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        Scanner sc = new Scanner(System.in);
            // System.in ["in"-input object] - input stream that gives you a stream of bytes from standard input device(keyboard)
            // InputStreamReader - converts stream of bytes(8 bits) into stream of characters(16 bits)
            // BufferedReader function expects character stream to read data 

        System.out.print("Enter Your full name : ");
    //  String Name = sc.nextLine();
        String Name = reader.readLine();        // BufferedReader throws checked exceptions, so we need to add throws declaration to handle the IOException
        System.out.print("Enter Your Age : ");
        int age = sc.nextInt();
    //  int age = Integer.parseInt(reader.readLine());
        System.out.print("Enter Your Hight(in cm) : ");
        float height = sc.nextFloat();

        System.out.println("Hello " + Name + ", age " + age +", have a good day...");

        System.out.print("Enter Your full name : ");
        String fullname = sc.next();

        System.out.println("Hello " + fullname + ", have a good day...");
        System.out.printf("Name: %s, Age: %d, Height: %.2f\n", name, age, height);
        System.out.println(String.format("Name: %s, Age: %d, Height: %.2f", name, age, height));

        sc.close();
    }                                               
}                                                   
