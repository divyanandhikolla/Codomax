// View Profile Button
document.getElementById("welcomeBtn").addEventListener("click", function () {
    document.getElementById("welcomeMessage").innerHTML =
    "Welcome to my portfolio! Thank you for visiting.";
});

// Change Heading Button
document.getElementById("changeText").addEventListener("click", function () {
    document.getElementById("heading").innerHTML =
    "Welcome to My Portfolio 🚀";
});

// Scroll to Top Button
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Contact Form Validation

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    document.getElementById("successMessage").innerHTML =
        "✅ Message sent successfully!";

    contactForm.reset();

});