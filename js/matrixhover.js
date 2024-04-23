document.addEventListener("DOMContentLoaded", function() {
    const duration = 2900;
    const startTime = Date.now(); // Momento en que comienza la animación

    // Itera sobre todos los elementos .mh
    document.querySelectorAll('.mh').forEach(li => {
        const spans = li.querySelectorAll('span'); // Selecciona todos los elementos <span> dentro del <li>
        
        // Inicializa el contenido de cada <span> con un carácter aleatorio
        spans.forEach((span, index) => {
            const originalLetter = span.textContent.trim();
            span.textContent = getRandomCharacter();
            span.dataset.originalLetter = originalLetter; // Establece el texto original en el dataset
            
        });
    });

    // Define un intervalo para actualizar continuamente los caracteres aleatorios
    const intervalId = setInterval(function() {
        const currentTime = Date.now();
        
        // Itera sobre todos los elementos .mh
        document.querySelectorAll('.mh').forEach(li => {
            const spans = li.querySelectorAll('span'); // Selecciona todos los elementos <span> dentro del <li>
            
            // Si ha pasado el tiempo establecido, muestra el texto original y detiene la animación
            if (currentTime - startTime >= duration) {
                spans.forEach((span, index) => {
                    span.textContent = span.dataset.originalLetter; // Muestra el texto original
                    span.style.color = '';
                });
                clearInterval(intervalId); // Detiene el intervalo
            } else {
                // Actualiza el contenido de cada <span> con un nuevo carácter aleatorio
                spans.forEach(span => {
                    span.textContent = getRandomCharacter();
                    span.style.color = "#08da08bf"; 
                });
            }
        });
    }, 130); // Intervalo de tiempo en milisegundos (100 ms en este caso)
});

// Función para obtener un carácter aleatorio
function getRandomCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzあいうえおか0123456789きくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    return characters.charAt(Math.floor(Math.random() * characters.length)); // Retorna un carácter aleatorio
}


//---------------

















