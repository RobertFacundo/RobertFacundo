
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el elemento canvas del documento
    let c = document.querySelector("#d");
    // Obtiene el contexto de representación 2D del canvas
    let ctx = c.getContext("2d");

    
    // Establece el ancho del canvas como el ancho de su contenedor
    c.width = c.parentElement.offsetWidth + 39;
    // Establece la altura del canvas como la altura de su contenedor
    c.height = c.parentElement.offsetHeight;

    // Define los conjuntos de caracteres a utilizar
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let japanese = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    let numbers = "0123456789";
    // Concatena todos los conjuntos de caracteres en uno solo
    let allCharacters = characters + japanese + numbers;

    // Convierte el string de caracter es en un array donde cada carácter es un elemento
    allCharacters = allCharacters.split("");

    // Tamaño de las letras
    let font_size = 13; 
    // Número de columnas para la "lluvia" de letras
    let columns = c.width / font_size;
    // Array que almacena la posición vertical de cada letra en una columna
    let drops = [];

    // Inicializa el array de gotas con la posición inicial de cada letra en una columna
    for(let x = 0; x < columns; x++)
        drops[x] = 1; 

    // Función para dibujar y animar la "lluvia" de letras en el canvas
    function draw()
    {
        // Crea una capa semitransparente sobre el canvas para simular el rastro de las letras
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        
        // Establece el color de las letras
        ctx.fillStyle = "#0F0"; // Verde
        // Establece el tamaño de fuente y la fuente a utilizar
        ctx.font = font_size + "px arial";
        
        // Itera sobre todas las gotas (letras) en cada columna
        for(let i = 0; i < drops.length; i++)
        {
            // Elige un carácter aleatorio del conjunto de caracteres
            let text = allCharacters[Math.floor(Math.random()*allCharacters.length)];
            // Dibuja el carácter en la posición correspondiente en el canvas
            ctx.fillText(text, i*font_size, drops[i]*font_size);
            
            // Si la gota ha caído más allá del borde inferior del canvas y aleatoriamente
            // se decide reiniciarla en la parte superior
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;
            
            // Incrementa la posición vertical de la gota para que caiga hacia abajo
            drops[i]++;
        }
    }

    // Establece un intervalo para llamar a la función draw cada 69 milisegundos
    setInterval(draw, 69); // Intervalo de tiempo ajustado a 69 milisegundos para controlar la velocidad de la caída
});