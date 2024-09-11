var trandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-btn');
    const navList = document.getElementById('nav-list');

    toggleButton.addEventListener('click', () => {
        // Toggle active class to change button appearance
        toggleButton.classList.toggle('active');

        // Toggle the show class to make the navigation visible
        navList.classList.toggle('show');

});
});
