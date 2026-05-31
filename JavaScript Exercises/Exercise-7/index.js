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

const container = document.querySelector("#eventContainer");

events.forEach(event => {

    const card = document.createElement("div");

    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Category: ${event.category}</p>
        <p>Seats: ${event.seats}</p>
        <button>Register</button>
    `;

    container.appendChild(card);
});
