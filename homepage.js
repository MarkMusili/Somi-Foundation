document.addEventListener('DOMContentLoaded', () => {
    let slider = document.querySelector('.carousel');
    let slides = document.querySelectorAll('.carousel-item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let index = 0;
    const totalSlides = slides.length;

    // Function to reset the animations for the current slide
    function resetAnimation(content) {
        const h1 = content.querySelector('h1');
        const p = content.querySelector('p');
        const buttons = content.querySelector('.buttons');

        // Remove the animation class
        h1.style.animation = 'none';
        p.style.animation = 'none';
        buttons.style.animation = 'none';

        // Trigger reflow to reset the animation (forces re-render)
        void h1.offsetWidth;
        void p.offsetWidth;
        void buttons.offsetWidth;

        // Add the animation back
        h1.style.animation = 'showContent .5s 1.2s linear forwards';
        p.style.animation = 'showContent .5s 1.4s linear forwards';
        buttons.style.animation = 'showContent .5s 1.6s linear forwards';
    }

    // Function to handle the current slide animation
    function handleCarouselChange() {
        const activeItem = slides[index]; // Get the active slide by index
        const content = activeItem.querySelector('.content');
        if (content) {
            resetAnimation(content);
        }
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
        handleCarouselChange(); // Call the function to reset animation when the slide changes
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
    }, 17000);

    // Reset interval on manual slide
    slider.addEventListener('transitionend', () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            next.click();
        }, 17000);
    });

    // Toggle button logic for mobile menu (no changes here)
    const toggleButton = document.getElementById('toggle-btn');
    const navList = document.getElementById('nav-list');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');
        navList.classList.toggle('show');
    });

    // Initialize the animation on the first slide
    handleCarouselChange();
});
