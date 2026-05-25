// 22. File Writing
// • Objective: Write data to a file.
// • Task: Write user input to a text file.
// • Instructions:
// o Prompt the user for a string.
// o Write the string to a file named output.txt.
// o Confirm that the data has been written.


import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWriting {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {

            System.out.print("Enter some text: ");
            String content = sc.nextLine();

            FileWriter writer = new FileWriter("output.txt");

            writer.write(content);
            writer.close();

            System.out.println("Data successfully written into output.txt");

        }
        catch(IOException e) {

            System.out.println("Error occurred while writing file.");

        }

        sc.close();
    }
}
