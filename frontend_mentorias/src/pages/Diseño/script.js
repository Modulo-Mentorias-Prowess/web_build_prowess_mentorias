document.addEventListener("DOMContentLoaded", function() {
    var animatedSections = document.querySelectorAll(".animated-section");

    function checkScroll() {
        for (var i = 0; i < animatedSections.length; i++) {
            var section = animatedSections[i];
            var sectionTop = section.getBoundingClientRect().top;

            if (sectionTop - window.innerHeight + 100 <= 0) {
                section.classList.add("animate");
            }
        }
    }

    checkScroll();

    window.addEventListener("scroll", function() {
        checkScroll();
    });
});