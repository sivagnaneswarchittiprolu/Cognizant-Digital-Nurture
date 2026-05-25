// 26. Thread Creation
// • Objective: Implement multithreading.
// • Task: Create and run two threads that print messages.
// • Instructions:
// o Define a class that extends Thread or implements Runnable.
// o In the run() method, print a message multiple times.
// o Start both threads and observe the output.

class CookingTask extends Thread {
    private String task;

    CookingTask(String task) {
        this.task = task;
    }

    public void run() {
        System.out.println(task + " is being prepared by " +
            Thread.currentThread().getName());
    }
}

public class Restaurant {
    public static void main(String[] args) {
        Thread t1 = new CookingTask("Pasta");
        Thread t2 = new CookingTask("Salad");
        Thread t3 = new CookingTask("Dessert");
        Thread t4 = new CookingTask("Rice");

        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}
