document.addEventListener("DOMContentLoaded", function() {
    var ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("click", function(event) {
        event.preventDefault();
        alert("¡Has hecho clic en el botón de inicio!");
    });
});