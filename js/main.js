// ---------------------------------------------------------------
// main.js — Afterdark
// Solo hay dos comportamientos por ahora. Los carruseles NO tienen
// JavaScript: los acordaremos más adelante.
// ---------------------------------------------------------------

// 1) Buscador: de momento no hace nada (se conectará a la base de datos).
const searchForm = document.querySelector("#search-form");
if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault(); // evita que la página se recargue
    });
}

// 2) Ojo de las contraseñas: alterna entre ocultar y mostrar.
//    Cada botón lleva data-toggle-password="id-del-input".
document.querySelectorAll("[data-toggle-password]").forEach((button) => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.togglePassword);
        const icon = button.querySelector("img");
        const isHidden = input.type === "password";

        input.type = isHidden ? "text" : "password";
        icon.src = isHidden ? "../assets/icons/eye-closed.svg" : "../assets/icons/eye.svg";
        button.setAttribute("aria-label", isHidden ? "Ocultar contraseña" : "Mostrar contraseña");
    });
});
