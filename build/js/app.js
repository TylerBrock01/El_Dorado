document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById("btnmenu");
    boton.addEventListener("click", () => {
        const menuNavegacion = document.getElementById("menu-nav");
        menuNavegacion.remove()

    });
})
