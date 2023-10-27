document.addEventListener('DOMContentLoaded', function () {
    // Select all the anchor links inside the navigation
    const navLinks = document.querySelectorAll('.nav a');

    // Iterate through each link and add an event listener
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default behavior of anchor links

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Adjust the offset if needed, or remove it if not needed
                const offset = 20;
                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
