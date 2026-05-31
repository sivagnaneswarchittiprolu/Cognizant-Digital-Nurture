const events = [
    {
        name: "Music Fest",
        date: "2026-07-10",
        seats: 20
    },
    {
        name: "Art Exhibition",
        date: "2024-01-15",
        seats: 10
    },
    {
        name: "Food Carnival",
        date: "2026-08-05",
        seats: 0
    }
];

const today = new Date();

events.forEach(event => {
    const eventDate = new Date(event.date);

    if (eventDate > today && event.seats > 0) {
        console.log(`${event.name} is available for registration.`);
    } else {
        console.log(`${event.name} is not available.`);
    }
});

function registerUser(event) {
    try {
        if (event.seats <= 0) {
            throw new Error("No seats available!");
        }

        event.seats--;
        console.log(`Successfully registered for ${event.name}`);
        console.log(`Remaining Seats: ${event.seats}`);

    } catch (error) {
        console.error("Registration Failed:", error.message);
    }
}

registerUser(events[0]); 
registerUser(events[2]);
