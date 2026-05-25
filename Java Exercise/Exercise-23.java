// 23. File Reading
// • Objective: Read data from a file.
// • Task: Read and display the contents of output.txt.
// • Instructions:
// o Open output.txt for reading.
// o Read each line and display it on the console.


import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner; 

public class ReadFile 
{
    public static void main(String[] args)
    {
        try {
            File Obj = new File("myfile.txt");
            Scanner Reader = new Scanner(Obj);
          
          	while (Reader.hasNextLine()) {
                String data = Reader.nextLine();
                System.out.println(data);
            }
          
            Reader.close();
        }
        
        catch (FileNotFoundException e) {
            System.out.println("An error has occurred.");
            e.printStackTrace();
        }
    }
}
