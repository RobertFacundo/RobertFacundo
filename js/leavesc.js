// Variables para el tamaño de la ventana
let w = 1400; // Ancho específico de 500px
let h = 400; // Alto específico de 600px

// Cantidad total de hojas
let totalLeaves = 27;

// Imágenes de las hojas
let leafImages = [

    "https://totalpng.com//public/uploads/preview/autumn-leaf-pngautumn-transparent-png-images-11664787685g1lk5stewj.png",
    "https://www.seekpng.com/png/full/387-3878276_sycamore-tree-leaf-png.png",
    
];

// Contenedor de las hojas en la sección de videojuegos
let container = document.querySelector(".contacto #container");

// Crear hojas y agregarlas al contenedor
for (let i = 0; i < totalLeaves; i++) {
    let leaf = document.createElement("div");
    leaf.className = "dot";
    leaf.style.backgroundImage = "url('" + getRandomLeafImage() + "')";
    container.appendChild(leaf);
    animateLeaf(leaf);
}

// Función para obtener una imagen de hoja aleatoria
function getRandomLeafImage() {
    return leafImages[Math.floor(Math.random() * leafImages.length)];
}

function animateLeaf(leaf) {
    // Posición inicial aleatoria con margen en la parte superior
    let x = Math.random() * w;
    let y = Math.random() * h;

    // Rotación inicial aleatoria en ambos ejes
    let initialRotationX = Math.random() * 360;
    let initialRotationY = Math.random() * 360;

    // Animación de caída con transición y rotación en ambos ejes
    leaf.style.transition = "transform 6s linear";
    leaf.style.transform = "translate(" + x + "px, " + (h + 100) + "px) rotateX(" + initialRotationX + "deg) rotateY(" + initialRotationY + "deg)";

    // Reiniciar la posición y rotación de la hoja después de que termine la animación
    setTimeout(function() {
        leaf.style.transition = "none";
        leaf.style.transform = "translate(" + x + "px, " + (y - 50) + "px) rotateX(" + (initialRotationX + 180) + "deg) rotateY(" + (initialRotationY + 180) + "deg)";
        setTimeout(function() {
            animateLeaf(leaf);
        }, Math.random() * 2000);
    }, 6000);
}
