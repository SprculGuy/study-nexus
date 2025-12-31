public class referenceStrangeBehavior {
    public static void main(String args[]){
        Integer x1 = 400;
        Integer x2 = 400;
        if(x1 == x2) // false; as x1 and x2 are different reference objects referencing to different memory locations storing the value 400
            System.out.println("Same");
        else
            System.out.println("Not Same");     

        Integer y1 = 40;
        Integer y2 = 40;
        if(y1 == y2) // due to caching of the smaller literal values, y1 and y2 are referencing to same memory location storing the value 40
            System.out.println("Same");
        else
            System.out.println("Not Same");
    }
}
