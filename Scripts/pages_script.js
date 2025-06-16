
fetch("/Components/header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header-placeholder").innerHTML = data;
});

fetch("/Components/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
});

// Sélectionne toutes les balises <video> de la page
const videos = document.querySelectorAll('video');

// Volume souhaité (entre 0.0 et 1.0)
const volumeLevel = 0.3;

videos.forEach(video => {
    video.volume = volumeLevel;
});