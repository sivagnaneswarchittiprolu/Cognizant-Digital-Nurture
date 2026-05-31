const form =
document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form Submission Started");

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    console.log("Name:", name);
    console.log("Email:", email);

    const userData = {
        name: name,
        email: email
    };

    console.log("Payload:", userData);

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

    .then(response => {

        console.log(
            "Response Status:",
            response.status
        );

        return response.json();
    })

    .then(data => {

        console.log(
            "Registration Successful"
        );

        console.log(data);
    })

    .catch(error => {

        console.error(
            "Registration Failed:",
            error
        );
    });

});
