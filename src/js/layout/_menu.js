
function mostrar_ordenes() {
    const overlay = document.getElementById("overlay")

    const div = document.createElement("DIV");
    div.className = "menu-nav contenedor";
    div.id = "menu-nav";
    overlay.appendChild(div);
    const nav = document.createElement("NAV");
    nav.className = "nav-section";
    overlay.appendChild(nav);


}
function crear_nav(){

    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    const a = document.createElement("A");
    a.className = "option-section";
    a.href = "#";
    a.appendChild(nav);
}