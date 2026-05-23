// 10. Number Guessing Game
// • Objective: Implement loops and conditional logic.
// • Task: Create a game where the user guesses a randomly generated number.
// • Instructions:
// o Generate a random number between 1 and 100.
// o Prompt the user to guess the number.
// o Provide feedback if the guess is too high or too low.
// o Continue until the user guesses correctly.


import java.util.Scanner;

public class BinarySearchGuessGame {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int low = 1;
        int high = 100;
        int mid;

        System.out.println("Think of a number between 1 and 100.");

        while (low <= high) {

            mid = (low + high) / 2;

            System.out.println("Is your number " + mid + "?");
            System.out.println("Enter:");
            System.out.println("1 -> Correct");
            System.out.println("2 -> Too High");
            System.out.println("3 -> Too Low");

            int choice = sc.nextInt();

            if (choice == 1) {
                System.out.println("Yay! I guessed your number.");
                break;
            }
            else if (choice == 2) {
                high = mid - 1;
            }
            else if (choice == 3) {
                low = mid + 1;
            }
            else {
                System.out.println("Invalid input.");
            }
        }

        sc.close();
    }
}
