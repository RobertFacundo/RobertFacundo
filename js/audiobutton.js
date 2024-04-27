
document.addEventListener("DOMContentLoaded", function() {
    let isMuted = false;
    let modalShown = false;
    let audioUrl = "../lcg_.wav"; 

    let audioPlayer = new Audio(audioUrl);
    audioPlayer.load(); 
    // let audioPlayer = document.getElementById("audioPlayer");

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