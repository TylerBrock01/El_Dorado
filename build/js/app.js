const boton = document.getElementById("btnmenu");

document.addEventListener('DOMContentLoaded', () => {
    let toggle;

    boton.addEventListener("click", () => {
        if(toggle == null || toggle === false){
            mostrar_ordenes();
            return toggle = true;
        }
        if(toggle){
            no_mostrar()
            return toggle = false;
        }
    });

})

function mostrar_ordenes() {
    console.log("mostrar");
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
    for (let i = 0; i < service.length; i++) {
        const a = document.createElement("A");
        a.className = "option-section";
        a.href = "#";
        nav.appendChild(a);
        const h4 = document.createElement("H4");
        h4.className = "section-titulo";
        h4.textContent = service[i];
        a.appendChild(h4);
    }
}
function no_mostrar(){
    console.log("no_mostrar");
    const menu_nav = document.getElementById("menu-nav")
    menu_nav.remove();
}