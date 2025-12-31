import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class input_output {
    public static void main(String[] args){
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            // BufferedReader's object used to read a character or sequence of characters
        System.out.print("Enter only Character or String to read using BufferedReader: ");
        String s = "\u0000";
        try {
            s = reader.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("BufferedReader: " + s);
        

        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Enter the any value to read using Scanner: ");
            String x = scanner.next();
            System.out.print("Scanner:" + x);
            System.out.println(String.format(" Scanner:%s \n", x));

            System.out.printf("Scanner:%s ", x);
            System.out.format("Scanner:%s %2n", x);

            System.out.println("\n"+2+3);
            System.out.println(2+3+" "+2+3);
        }
    }  
}
