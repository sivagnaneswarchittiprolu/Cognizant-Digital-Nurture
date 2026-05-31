function Event(name, category, seats) {
    this.name = name;
    this.category = category;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {
    if (this.seats > 0) {
        return `${this.name} is available with ${this.seats} seats`;
    } else {
        return `${this.name} is full`;
    }
};

const event1 = new Event("Music Fest", "Music", 50);
const event2 = new Event("Art Exhibition", "Art", 0);

console.log(event1.checkAvailability());
console.log(event2.checkAvailability());

console.log("Event 1 Details:");

Object.entries(event1).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
