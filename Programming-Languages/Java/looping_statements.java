public class looping_statements {
    public static void main(String[] args) {
        for(int i=0 ;i<3 ;i++)
            System.out.printf("a%d\n", i);
        
        for(int i=0 ;i<3 ;i++){
            System.out.print("b");
            System.out.printf("%d\n", i);
        }

//      for( ; ; ){
//          System.out.println("Infinite Loop");
//      }

//        for( ;true; ){
//          System.out.println("Infinite Loop");
//      }
        
        int i = 0;
        while(i<3){
            System.out.printf("c%d\n", i);
            i++;  
        }

        int j = 0;
        do{
            System.out.printf("d%d\n", j);
            j++;
        }while(j<3);

    }
    
}
