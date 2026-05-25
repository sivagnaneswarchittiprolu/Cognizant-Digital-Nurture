// 21. Custom Exception
// • Objective: Create and use custom exceptions.
// • Task: Define a custom exception InvalidAgeException.
// • Instructions:
// o Throw InvalidAgeException if the user's age is less than 18.
// o Catch the exception and display a message.


class Demo {
    static void checkAge(int age) {
        
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or above");
        }
    }

    public static void main(String[] args) {
        
        checkAge(15);
    }
}
