document.addEventListener("DOMContentLoaded", function() {
    let isMuted = false;

    function toggleMute() {
        let btn = document.getElementById("muteBtn");
        if (isMuted) {
            btn.innerHTML = "&#x1D13D;"; // Cambiar a ícono de parlante con sonido
            btn.classList.remove("muted");
            btn.classList.add("unmuted");
            audioPlayer.play(); 
        } else {
            btn.innerHTML = "&#119136;"; // Cambiar a ícono de parlante muteado
            btn.classList.remove("unmuted");
            btn.classList.add("muted"); 
        }
        isMuted = !isMuted;
    }

    document.getElementById("muteBtn").addEventListener("click", toggleMute);
});
