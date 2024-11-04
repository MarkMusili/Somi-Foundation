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