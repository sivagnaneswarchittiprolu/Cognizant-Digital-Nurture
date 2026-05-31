let events = [
    {
        name: "Music Fest",
        category: "Music"
    },
    {
        name: "Art Exhibition",
        category: "Art"
    }
];

events.push({
    name: "Baking Workshop",
    category: "Workshop"
});

console.log("All Events:");
console.log(events);

const musicEvents = events.filter(
    event => event.category === "Music"
);

console.log("Music Events:");
console.log(musicEvents);

const eventCards = events.map(
    event => `Workshop on ${event.name}`
);

console.log("Formatted Event Cards:");
console.log(eventCards);
