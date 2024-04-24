window.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let backToTopBtn = document.getElementById("backToTopBtn");

        if (scrollTop > 100) {
            backToTopBtn.style.display = "block";
            fadeIn(backToTopBtn); // Aplicar efecto de fade-in
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function fadeIn(element) {
        var op = 0.1;  // Iniciar opacidad en 0.1
        element.style.opacity = op;
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            op += op * 0.1;
        }, 5);
    }

    // Asignar evento onclick al botón cuando se carga el DOM
    let backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        backToTopBtn.onclick = scrollToTop;
    }
});