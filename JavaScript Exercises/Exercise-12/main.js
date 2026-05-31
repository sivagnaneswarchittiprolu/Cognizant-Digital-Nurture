const form =
document.getElementById("registrationForm");

const message =
document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const userData = {
        name: name,
        email: email
    };

    message.textContent =
    "Submitting Registration...";

    setTimeout(() => {

        fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify(userData)
            }
        )

        .then(response => response.json())

        .then(data => {

            console.log(data);

            message.textContent =
            "Registration Successful!";
        })

        .catch(error => {

            console.error(error);

            message.textContent =
            "Registration Failed!";
        });

    }, 2000);

});
