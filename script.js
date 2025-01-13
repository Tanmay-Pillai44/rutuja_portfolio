$(document).ready(function () {

    // Initialize EmailJS once
    emailjs.init("1QS7YFgK6icA7U0PD");

    // EmailJS Form Submission
    $("#contact-form").submit(function (event) {
        event.preventDefault(); // Prevent page refresh

        console.log("Submitting form...");

        // Ensure EmailJS is loaded
        if (typeof emailjs === "undefined") {
            console.error("EmailJS not loaded. Please check your API key.");
            alert("EmailJS failed to initialize. Try again later.");
            return;
        }

        // Send form data via EmailJS
        emailjs.sendForm('service_bc51vus', 'template_o8pgy4j', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Form Submitted Successfully");
                document.getElementById("contact-form").reset();
            })
            .catch(function (error) {
                console.error('FAILED...', error);
                alert("Form Submission Failed! Please check the console for details.");
            });
    });

});


function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const error = document.getElementById("phone-error");

    // Regular expression to validate international phone numbers in E.164 format
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Allows +, followed by 1 to 15 digits

    if (!phoneRegex.test(phoneInput.value)) {
        error.style.display = "block"; // Show error message
        phoneInput.style.borderColor = "red"; // Add a red border to the input field
        error.textContent = "Please enter a valid international phone number (e.g., +1234567890).";
    } else {
        error.style.display = "none"; // Hide error message
        phoneInput.style.borderColor = "green"; // Add a green border to indicate valid input
    }
}


$(document).ready(function () {
    if (!$("#myCanvas").tagcanvas({
      textColour: "#ffbd39",
      outlineColour: "transparent",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
    }, "tags")) {
      // Hide the canvas container if something goes wrong
      $("#myCanvasContainer").hide();
    }
  });