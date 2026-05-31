const events = [
    { name: "Music Fest", category: "Music" },
    { name: "Art Exhibition", category: "Art" },
    { name: "Baking Workshop", category: "Workshop" }
];

const container = document.querySelector("#eventContainer");

function displayEvents(eventList) {

    container.innerHTML = "";

    eventList.forEach(event => {

        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.category}</p>
            <button onclick="registerEvent('${event.name}')">
                Register
            </button>
            <hr>
        `;

        container.appendChild(card);
    });
}

function registerEvent(eventName) {
    alert(`Successfully Registered for ${eventName}`);
}

document.querySelector("#categoryFilter")
.onchange = function () {

    const selectedCategory = this.value;

    if (selectedCategory === "All") {
        displayEvents(events);
    } else {

        const filteredEvents = events.filter(
            event => event.category === selectedCategory
        );

        displayEvents(filteredEvents);
    }
};

document.querySelector("#searchBox")
.addEventListener("keydown", function () {

    const searchText = this.value.toLowerCase();

    const searchedEvents = events.filter(
        event =>
        event.name.toLowerCase()
        .includes(searchText)
    );

    displayEvents(searchedEvents);
});

// Initial Display
displayEvents(events);
