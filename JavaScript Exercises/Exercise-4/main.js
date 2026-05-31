let events = [];

function addEvent(name, category, seats) {
    events.push({
        name,
        category,
        seats
    });

    console.log(`${name} added successfully.`);
}

function registerUser(eventName) {
    const event = events.find(e => e.name === eventName);

    if (event && event.seats > 0) {
        event.seats--;
        console.log(`Registered for ${eventName}`);
    } else {
        console.log(`Registration failed for ${eventName}`);
    }
}

function filterEventsByCategory(category, callback) {
    const filteredEvents = events.filter(
        event => event.category === category
    );

    callback(filteredEvents);
}

function registrationCounter(category) {
    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        console.log(
            `${category} Registrations: ${totalRegistrations}`
        );
    };
}

const musicCounter = registrationCounter("Music");

addEvent("Music Fest", "Music", 50);
addEvent("Art Show", "Art", 30);
addEvent("Rock Concert", "Music", 100);

registerUser("Music Fest");

musicCounter();
musicCounter();
musicCounter();

filterEventsByCategory("Music", function(result) {
    console.log("Music Events:");
    console.log(result);
});
