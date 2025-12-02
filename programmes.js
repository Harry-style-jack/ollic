const navber = document.querySelector("nav")

const countdownElements = document.querySelectorAll('.countdown');

let responsive = document.querySelector(".links")

let hambuger = document.getElementById("hambuger")

let menuOpen = false;

// HAMBUGER

hambuger.addEventListener("click", () => {
    if (menuOpen == false) {
        responsive.style.display = "block";
        menuOpen = true;
    } else if (menuOpen == true) {
        responsive.style.display = "none";
        menuOpen = false;
    }
});
