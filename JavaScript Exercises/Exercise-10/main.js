const events = [
    {
        name: "Music Fest",
        category: "Music",
        seats: 50
    },
    {
        name: "Art Exhibition",
        category: "Art",
        seats: 30
    },
    {
        name: "Baking Workshop",
        category: "Workshop",
        seats: 20
    }
];

function registerUser(userName = "Guest") {
    console.log(`Welcome ${userName}`);
}

registerUser();
registerUser("John");

const { name, category, seats } = events[0];

console.log("Destructured Values:");
console.log(name);
console.log(category);
console.log(seats);

const clonedEvents = [...events];

console.log("Original Events:");
console.log(events);

console.log("Cloned Events:");
console.log(clonedEvents);

const musicEvents = clonedEvents.filter(
    event => event.category === "Music"
);

console.log("Music Events:");
console.log(musicEvents);
