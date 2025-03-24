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
