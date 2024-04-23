document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
});

function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;

    // Duración del desplazamiento (en milisegundos)
    const duration = 1139; 

    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollAmount = Math.floor(easeInOutQuad(timeElapsed, startPosition, targetPosition - startPosition, duration));
        window.scrollTo(0, scrollAmount);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}