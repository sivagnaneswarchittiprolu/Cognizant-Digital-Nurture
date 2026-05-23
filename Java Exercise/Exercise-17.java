// 17. Class and Object Creation
// • Objective: Understand classes and objects.
// • Task: Create a Car class with attributes and methods.
// • Instructions:
// o Define attributes: make, model, year.
// o Implement a method displayDetails() to print car information.
// o Create objects of the Car class and call the method.

class Car {

    String make;
    String model;
    int year;

    void displayDetails() {

        System.out.println("Car Make: " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Car Year: " + year);
    }
}

public class ClassAndObjectCreation {

    public static void main(String[] args) {

        Car car1 = new Car();
        car1.make = "Toyota";
        car1.model = "Camry";
        car1.year = 2022;

        Car car2 = new Car();
        car2.make = "Honda";
        car2.model = "City";
        car2.year = 2021;

        System.out.println("Car 1 Details:");
        car1.displayDetails();

        System.out.println();

        System.out.println("Car 2 Details:");
        car2.displayDetails();
    }
}
