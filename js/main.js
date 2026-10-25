// --------------------------------------------------
// Afterdark — comportamientos generales
// --------------------------------------------------

// Buscador: de momento no hace nada (se conectará con la base de datos).
const searchForm = document.querySelector("#search-form");

if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}

// Ojo de las contraseñas: alterna entre ocultar y mostrar.
document.querySelectorAll("[data-toggle-password]").forEach((button) => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.togglePassword);
        const icon = button.querySelector("img");

        if (!input || !icon) return;

        const isHidden = input.type === "password";
        input.type = isHidden ? "text" : "password";
        icon.src = isHidden ? "../assets/icons/eye-closed.svg" : "../assets/icons/eye.svg";
        button.setAttribute(
            "aria-label",
            isHidden ? "Ocultar contraseña" : "Mostrar contraseña"
        );
    });
});


// Carruseles
document.querySelectorAll("[data-carousel]").forEach((container) => {
    const carousel = container.querySelector(".carousel-track");

    if (!carousel) return;

    const carouselId = carousel.id;
    const prevButton = container.querySelector(
        `[data-carousel-prev="${carouselId}"]`
    );
    const nextButton = container.querySelector(
        `[data-carousel-next="${carouselId}"]`
    );
    const leftFade = container.querySelector('[data-carousel-fade="left"]');
    const rightFade = container.querySelector('[data-carousel-fade="right"]');

    if (!prevButton || !nextButton) return;

    // Qué zona del carrusel está bajo el cursor: "left", "right" o ninguna.
    let hoveredSide = null;

    function getScrollState() {
        const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
        const hasOverflow = maxScroll > 1;

        return {
            canScrollLeft: hasOverflow && carousel.scrollLeft > 1,
            canScrollRight: hasOverflow && carousel.scrollLeft < maxScroll - 1
        };
    }

    // Degradados: dependen del contenido que queda por ver, no del cursor.
    // Flechas: dependen del contenido disponible y de la zona bajo el cursor.
    function updateCarouselUI() {
        const { canScrollLeft, canScrollRight } = getScrollState();

        if (leftFade) {
            leftFade.classList.toggle("is-visible", canScrollLeft);
        }

        if (rightFade) {
            rightFade.classList.toggle("is-visible", canScrollRight);
        }

        prevButton.classList.toggle(
            "is-visible",
            hoveredSide === "left" && canScrollLeft
        );

        nextButton.classList.toggle(
            "is-visible",
            hoveredSide === "right" && canScrollRight
        );
    }

    // Solo mostrar la flecha de la zona izquierda o derecha.
    container.addEventListener("pointermove", (event) => {
        // No mostrar flechas por movimiento táctil.
        if (event.pointerType === "touch") return;

        const bounds = container.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const edgeWidth = Math.min(64, bounds.width * 0.2);

        if (x <= edgeWidth) {
            hoveredSide = "left";
        } else if (x >= bounds.width - edgeWidth) {
            hoveredSide = "right";
        } else {
            hoveredSide = null;
        }

        updateCarouselUI();
    });

    container.addEventListener("pointerleave", () => {
        hoveredSide = null;
        updateCarouselUI();
    });

    // Mover el carrusel en la dirección indicada.
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: -carousel.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: carousel.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

    // Actualizar los límites durante el desplazamiento y al redimensionar.
    carousel.addEventListener("scroll", updateCarouselUI, { passive: true });
    window.addEventListener("resize", updateCarouselUI);

    // Estado inicial.
    updateCarouselUI();
});
