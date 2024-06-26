// document.addEventListener("DOMContentLoaded", function() {
//     let slideIndex = 1;
//     showSlides(slideIndex);

//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }

//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }

//     function showSlides(n) {
//         let i;
//         let slides = document.getElementsByClassName("mySlides");
//         let dots = document.getElementsByClassName("dot");
//         if (n > slides.length) {slideIndex = 1}    
//         if (n < 1) {slideIndex = slides.length}
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//             slides[i].classList.remove("fade"); // Remove the fade class from all slides
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";  
//         slides[slideIndex-1].classList.add("fade"); // Add the fade class to the current slide
//         dots[slideIndex-1].className += " active";
//     }

//     // Attach event listeners to the previous and next buttons
//     document.querySelector('.prev').addEventListener('click', function() {
//         plusSlides(-1);
//     });

//     document.querySelector('.next').addEventListener('click', function() {
//         plusSlides(1);
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove("fade"); // Remove the fade class from all slides
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        slides[slideIndex-1].classList.add("fade"); // Add the fade class to the current slide
        dots[slideIndex-1].className += " active";
    }

    // Attach event listeners to the previous and next buttons
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });
});