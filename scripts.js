document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
