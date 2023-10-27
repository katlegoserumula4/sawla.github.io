
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 


 // Function to scroll back to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the "Back to the Top" button when the user scrolls down
// window.addEventListener('scroll', function() {
//     const button = document.getElementById('back-to-top');
//     if (window.scrollY > 200) {
//         button.style.display = 'block';
//     } 
//     // else {
//     //     button.style.display = 'block';
//     // }
// });

// // Add a click event listener to the button
// document.getElementById('back-to-top').addEventListener('click', scrollToTop);

// function navToggle() {
//     // ... your existing code

//     // Check if a navigation link was clicked
//     if (event.target.tagName === 'A') {
//         // Prevent the default link behavior
//         event.preventDefault();

//         // Get the href attribute of the clicked link
//         const href = event.target.getAttribute('href');

//         // Navigate to the linked page
//         window.location.href = href;
//     }
// };