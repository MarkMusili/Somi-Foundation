document.addEventListener('DOMContentLoaded', () => {
    let slider = document.querySelector('.carousel');
    let slides = document.querySelectorAll('.carousel-item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let index = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener('click', () => {
        index = (index + 1) % totalSlides;
        updateSlider();
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    let autoSlideInterval = setInterval(() => {
        next.click();
    }, 10000);

    // Reset interval on manual slide
    slider.addEventListener('transitionend', () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            next.click();
        }, 10000);
    });
    const toggleButton = document.getElementById('toggle-btn');
    const navList = document.getElementById('nav-list');

    toggleButton.addEventListener('click', () => {
        // Toggle active class to change button appearance
        toggleButton.classList.toggle('active');

        // Toggle the show class to make the navigation visible
        navList.classList.toggle('show');
});
});
