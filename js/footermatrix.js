document.addEventListener("DOMContentLoaded", function() {
    const intervalId = setInterval(function() {
        const spans = document.querySelectorAll('.link span'); // Selecciona todos los elementos <span> dentro de .link

        // Actualiza el contenido de cada <span> con un nuevo carácter aleatorio y establece el color verde
        spans.forEach(span => {
            span.textContent = getRandomCharacter();
            span.style.color = "#08da08bf";
        });
    }, 130); // Intervalo de tiempo en milisegundos (100 ms en este caso)
});

// Función para obtener un carácter aleatorio
function getRandomCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzあいうえおか0123456789きくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    return characters.charAt(Math.floor(Math.random() * characters.length)); // Retorna un carácter aleatorio
}