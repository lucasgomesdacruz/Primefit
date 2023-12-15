const sliders = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideAllSlides() {
    sliders.forEach(item => {
        item.classList.remove('on');
    });
}

function showCurrentSlide() {
    sliders[currentSlide].classList.add('on');
}

function nextSlider() {
    hideAllSlides();
    if (currentSlide === sliders.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showCurrentSlide();
}

function prevSlider() {
    hideAllSlides();
    if (currentSlide === 0) {
        currentSlide = sliders.length - 1;
    } else {
        currentSlide--;
    }
    showCurrentSlide();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

// Exibindo o primeiro slider inicialmente
showCurrentSlide();


