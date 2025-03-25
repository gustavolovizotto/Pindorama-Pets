document.addEventListener("DOMContentLoaded", () => {
    // Código do carrossel
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carrossel-content > div");
    const dots = document.querySelectorAll(".dot");

    function mudarSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        
        slides[index].classList.add("active");
        dots[index].classList.add("active");
        
        currentSlide = index;
    }

    document.getElementById("prev-btn").addEventListener("click", () => {
        const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        mudarSlide(prevSlide);
    });

    document.getElementById("next-btn").addEventListener("click", () => {
        const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        mudarSlide(nextSlide);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => mudarSlide(index));
    });

    mudarSlide(0);

// Mapeamento dos textos dos links do header para os elementos da página
const sectionMap = {
    "Início": document.querySelector(".banner-central"),
    "Serviços": document.querySelector(".carrossel"),
    "Sobre nós": document.querySelector("#divAprPrincipal"),
    "Contato": document.querySelector(".span-form")
};

// scroll para os links do header
const navLinks = document.querySelectorAll("header nav ul.nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const linkText = this.textContent.trim();
        const targetSection = sectionMap[linkText];

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
});


// Logo do footer clicavel para voltar ao topo da página
document.addEventListener("DOMContentLoaded", () => {
    
    const logoFooter = document.querySelector(".logo-footer img");

    if (logoFooter) {
        logoFooter.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
