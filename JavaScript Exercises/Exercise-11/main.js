const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = form.elements["userName"].value;
    const email = form.elements["email"].value;
    const selectedEvent = form.elements["event"].value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("eventError").textContent = "";

    let isValid = true;

    if(name.trim() === "") {
        document.getElementById("nameError")
        .textContent = "Name is required";
        isValid = false;
    }

    if(email.trim() === "") {
        document.getElementById("emailError")
        .textContent = "Email is required";
        isValid = false;
    }

    if(selectedEvent === "") {
        document.getElementById("eventError")
        .textContent = "Select an event";
        isValid = false;
    }

    if(isValid) {

        document.getElementById("successMessage")
        .textContent =
        `Registration Successful for ${selectedEvent}`;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Event:", selectedEvent);
    }

});
