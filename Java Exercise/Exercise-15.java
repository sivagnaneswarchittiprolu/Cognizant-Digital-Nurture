// 15. String Reversal
// • Objective: Manipulate strings.
// • Task: Reverse a string entered by the user.
// • Instructions:
// o Prompt the user for a string.
// o Use a loop or StringBuilder to reverse the string.
// o Display the reversed string.

import java.util.Scanner;

public class StringReversal {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        String reversed = new StringBuilder(str).reverse().toString();

        System.out.println("Reversed String: " + reversed);

        sc.close();
    }
}
