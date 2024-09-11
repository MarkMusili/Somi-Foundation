document.addEventListener('DOMContentLoaded', function() {
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = 'Thank you for reaching out! Your message has been successfully sent. We will get back to you as soon as possible.';
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });
    window.onload = function() {
        // Reset the form fields when the page loads
        document.getElementById("form").reset();
    };
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