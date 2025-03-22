document.addEventListener('DOMContentLoaded', () => {
    // crear menu nav
    const boton = document.getElementById("btnmenu");
    boton.addEventListener("click", () => {
        toggle();
    });
})
let togglex;
function toggle() {
    // Cambiar el estado de togglex
    togglex = !togglex;

    if (togglex) {
        mostrar_ordenes(); // Si togglex es true, mostrar órdenes
    } else {
        no_mostrar(); // Si togglex es false, ocultar órdenes
    }

    console.log("Estado de togglex:", togglex); // Para depuración
}

function mostrar_ordenes() {
    console.log("mostrar");
    const activo = document.getElementsByClassName('.barra-menu')
    console.log(activo)
    const overlay = document.getElementById("overlay")
    const div = document.createElement("DIV");
    div.className = "menu-nav contenedor";
    div.id = "menu-nav";
    overlay.appendChild(div);
    const nav = document.createElement("NAV");
    nav.className = "nav-section";
    nav.id = "nav";
    div.appendChild(nav);
    // lista del menu
    const service = ["ordenes", "tacos", "ceviche", "snax"]
    for(let services of service){
        const a = document.createElement("A");
        a.className = "option-section";
        a.href = "#";
        nav.appendChild(a);
        const h4 = document.createElement("H4");
        h4.className = "section-titulo";
        h4.textContent = services;
        a.appendChild(h4);

    }
}
function no_mostrar(){
    console.log("no_mostrar");
    const menu_nav = document.getElementById("menu-nav")
    menu_nav.remove();
}