document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carrossel-content > div"); // Corrigido para pegar todos os slides
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

    // Inicializa o carrossel mostrando o primeiro slide corretamente
    mudarSlide(0);
});


// Slider de Avaliações
document.addEventListener("DOMContentLoaded", function() {
   
    const sliderContainer = document.querySelector(".slider");
    const slides = Array.from(document.querySelectorAll(".divQuadroAvaliacao"));
    const prevButtons = document.querySelectorAll("#prevBtn");
    const nextButtons = document.querySelectorAll("#nextBtn");
    const pageIndicators = document.querySelectorAll("#divNumPag");
    
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
});