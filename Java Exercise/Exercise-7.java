// 7. Type Casting Example
// • Objective: Practice type casting between different data types.
// • Task: Convert a double to an int and vice versa.
// • Instructions:
// o Declare a double variable with a decimal value.
// o Cast it to an int and display the result.
// o Declare an int variable and cast it to a double, then display.

public class Example {

    public static void main(String[] args) {

        // Double to int casting
        double d = 45.67;
        int num = (int) d;

        int x = 25;
        double y = (double) x;

        System.out.println("Original double value: " + d);
        System.out.println("After casting to int: " + num);

        System.out.println("Original int value: " + x);
        System.out.println("After casting to double: " + y);
    }
}
