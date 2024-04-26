

document.addEventListener("DOMContentLoaded", function() {
    let themeToggle = document.getElementById("themeToggle");
    let body = document.body;
    let muteBtn = document.getElementById("muteBtn");

    function toggleTheme() {
        if (themeToggle.checked) {
            console.log("Activando estilos adicionales");
            body.classList.add("theme-active");
            localStorage.setItem("theme", "light");
            updateMuteBtnColor("light"); // Llamar a la función para cambiar el color del botón de silenciar
        } else {
            console.log("Desactivando estilos adicionales");
            body.classList.remove("theme-active");
            localStorage.setItem("theme", "dark");
            updateMuteBtnColor("dark"); // Llamar a la función para cambiar el color del botón de silenciar
        }
    }


    function updateMuteBtnColor(theme) {
        if (theme === "light") {
            muteBtn.style.color = "black";
        } else {
            muteBtn.style.color = "white";
        }
    }

    themeToggle.addEventListener("change", toggleTheme);

    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        console.log("Cargando estilos adicionales");
        body.classList.add("theme-active");
        themeToggle.checked = true; // Establecer el estado del interruptor
        updateMuteBtnColor("light"); // Llamar a la función para cambiar el color del botón de silenciar
    } else {
        console.log("Cargando estilos primordiales");
        updateMuteBtnColor("dark"); // Llamar a la función para cambiar el color del botón de silenciar
    }
});



