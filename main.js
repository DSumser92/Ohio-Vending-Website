// Get the form element
var contactForm = document.getElementById('contact-form');

// Add an event listener for form submission
contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Perform form submission logic here (e.g., sending data to server)

    // Reset the form fields after successful submission
    contactForm.reset();

    // Optional: You can display a success message to the user
    alert('Form submitted successfully!');
});
