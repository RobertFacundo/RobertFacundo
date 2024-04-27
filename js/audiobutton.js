
// document.addEventListener("DOMContentLoaded", function() {
//     let isMuted = false;
//     let audioUrl = "../resources/lcg.mp3"; // Reemplaza "URL_DEL_AUDIO" con la URL de tu archivo de audio

//     let audioPlayer = new Audio(audioUrl);

//     function toggleMute() {
//         let btn = document.getElementById("muteBtn");
//         if (isMuted) {
//             btn.innerHTML = "&#x1D13D;"; // Cambiar a ícono de parlante con sonido
//             btn.classList.remove("muted");
//             btn.classList.add("unmuted");
//             audioPlayer.play(); 
//         } else {
//             btn.innerHTML = "&#119136;"; // Cambiar a ícono de parlante muteado
//             btn.classList.remove("unmuted");
//             btn.classList.add("muted"); 
//             audioPlayer.pause(); // Pausar el audio si está en silencio
//         }
//         isMuted = !isMuted;
//     }

//     document.getElementById("muteBtn").addEventListener("click", function() {
//         if (audioPlayer.readyState === 0) {
//             // Si el estado del audio es 0 (NETWORK_EMPTY), el audio no ha cargado todavía
//             audioPlayer.addEventListener("loadeddata", function() {
//                 // Esperar a que el audio se cargue completamente antes de cambiar el estado de silencio
//                 toggleMute();
//             });
//             audioPlayer.load(); // Forzar la carga del audio
//         } else {
//             toggleMute();
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    let isMuted = false;
    let modalShown = false;
    let audioUrl = "../lcg.mp3"; 

    let audioPlayer = new Audio(audioUrl);
    audioPlayer.load(); 

    function toggleMute() {
        let btn = document.getElementById("muteBtn");
        if (isMuted) {
            btn.innerHTML = "&#x1D13D;"; 
            btn.classList.remove("muted");
            btn.classList.add("unmuted");
            audioPlayer.play();
        } else {
            btn.innerHTML = "&#119136;"; 
            btn.classList.remove("unmuted");
            btn.classList.add("muted"); 
            audioPlayer.pause(); 
        }
        isMuted = !isMuted;
    }

    document.getElementById("muteBtn").addEventListener("click", function() {
        if (!modalShown) {
            document.getElementById("myModal").style.display = "flex";
            modalShown = true;
        } else {
            toggleMute();
        }
    });

    document.getElementById("confirmBtn").addEventListener("click", function() {
        document.getElementById("myModal").style.display = "none";
        toggleMute();
    });
});