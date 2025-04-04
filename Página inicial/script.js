/*document.addEventListener("DOMContentLoaded", () => {
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


// Slider de Avaliações
document.addEventListener("DOMContentLoaded", function() {
   
    const sliderContainer = document.querySelector(".slider");
    const slides = Array.from(document.querySelectorAll(".divQuadroAvaliacao"));
    const prevButtons = document.querySelectorAll(".prevBtn");
    const nextButtons = document.querySelectorAll(".nextBtn");
    const pageIndicators = document.querySelectorAll(".divNumPag");
    
    let currentIndex = 0;

    function updateSlider() {
        
        slides.forEach(slide => {
            slide.style.display = "none";
            slide.style.opacity = "0";
        });

        slides[currentIndex].style.display = "block";
        setTimeout(() => {
            slides[currentIndex].style.opacity = "1";
        }, 10);

        pageIndicators.forEach(indicator => {
            indicator.textContent = currentIndex + 1;
        });

        const isFirst = currentIndex === 0;
        const isLast = currentIndex === slides.length - 1;
        
        prevButtons.forEach(btn => {
            btn.style.pointerEvents = isFirst ? "none" : "auto";
            btn.style.opacity = isFirst ? "0.5" : "1";
        });
        
        nextButtons.forEach(btn => {
            btn.style.pointerEvents = isLast ? "none" : "auto";
            btn.style.opacity = isLast ? "0.5" : "1";
        });
    }

    prevButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });
    });

    updateSlider();
});*/

document.addEventListener("DOMContentLoaded", () => {
    // ===== Carrossel =====
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carrossel-content > div");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    const mudarSlide = (index) => {
        slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
        currentSlide = index;
    };

    prevBtn?.addEventListener("click", () => mudarSlide((currentSlide - 1 + slides.length) % slides.length));
    nextBtn?.addEventListener("click", () => mudarSlide((currentSlide + 1) % slides.length));
    dots.forEach((dot, index) => dot.addEventListener("click", () => mudarSlide(index)));

    mudarSlide(0);

    // ===== Scroll suave para seções =====
    const sectionMap = {
        "Início": ".banner-central",
        "Serviços": ".divSecundaria",
        "Sobre nós": ".divPrimeira",
        "Contato": ".span-form"
    };

    document.querySelector("header nav ul.nav-links")?.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const targetSection = document.querySelector(sectionMap[e.target.textContent.trim()]);
            targetSection?.scrollIntoView({ behavior: "smooth" });
        }
    });

    // ===== Logo do footer clicável =====
    document.querySelector(".logo-footer img")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    // ===== Logo do Header clicável =====
    document.querySelector(".logo")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ===== Slider de Avaliações =====
    const slidesAvaliacoes = document.querySelectorAll(".divQuadroAvaliacao");
    const pageIndicators = document.querySelectorAll(".divNumPag");
    let currentIndex = 0;

    const updateSlider = () => {
        slidesAvaliacoes.forEach((slide, i) => {
            slide.style.display = i === currentIndex ? "block" : "none";
            slide.style.opacity = i === currentIndex ? "1" : "0";
        });

        pageIndicators.forEach(indicator => indicator.textContent = currentIndex + 1);

        document.querySelectorAll(".prevBtn").forEach(btn => btn.style.opacity = currentIndex === 0 ? "0.5" : "1");
        document.querySelectorAll(".nextBtn").forEach(btn => btn.style.opacity = currentIndex === slidesAvaliacoes.length - 1 ? "0.5" : "1");
    };

    document.querySelector(".slider")?.addEventListener("click", (e) => {
        if (e.target.classList.contains("prevBtn") && currentIndex > 0) {
            currentIndex--;
        } else if (e.target.classList.contains("nextBtn") && currentIndex < slidesAvaliacoes.length - 1) {
            currentIndex++;
        }
        updateSlider();
    });

    updateSlider();
});
