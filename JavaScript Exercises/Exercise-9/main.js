function loadEventsPromise() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log("Promise Output");
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}

async function loadEventsAsync() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log("Async/Await Output");
        console.log(data);
    }
    catch(error) {
        console.error(error);
    }
}

loadEventsPromise();
loadEventsAsync();
