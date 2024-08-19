document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');

    timeline.addEventListener('scroll', function() {
        if (timeline.scrollLeft > 0) {
            timeline.style.marginLeft = '0';
        } else {
            timeline.style.marginLeft = '20%';
        }
    });

    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown-menu');

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open');
      const isOpen = dropDownMenu.classList.contains('open');

      toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
    };

});