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