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

// COUNTER

const duration = 1000; 

function updateCountdown(element) {
    
    const startValue = parseInt(element.dataset.start);
    const endValue = parseInt(element.dataset.end);

    const increment = (startValue - endValue) / (duration / 16); 

    let currentValue = startValue;

    function updateElement() {
        
        currentValue -= increment;

        element.textContent = `${Math.round(currentValue)}%`;

        if (currentValue <= endValue) {

            element.textContent = `${endValue}%`;

            return;
        }

        
        requestAnimationFrame(updateElement);
    }

    
    updateElement();
}

countdownElements.forEach((element) => {
    updateCountdown(element);
});



// IMAGESLIDER

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['<', '>'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.updateGallery();
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.innerText = control;
            galleryControlsContainer.appendChild(button);
        });
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();