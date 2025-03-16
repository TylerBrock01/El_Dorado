function mostrar_ordenes() {
    console.log("xdd")
    const menu = document.getElementById("menu-nav");
    menu.remove();

    const overlay = document.getElementById("overlay")
    const div = document.createElement("DIV");
    div.className = "menu-nav contenedor";
    div.id = "menu-nav";
    overlay.appendChild(div);
    const nav = document.createElement("NAV");
    nav.className = "nav-section";
    nav.id = "nav";
    div.appendChild(nav);
    // this.crear_nav(nav);
}
function crear_nav() {
    const nav = document.getElementById("nav");
    let menuObject = new Ordenes();
    for (let i = 0; i < menuObject.tipo.length; i++) {
        const a = document.createElement("A");
        a.className = "option-section";
        a.href = "#";
        a.appendChild(nav);
        const h1 = document.createElement("H4");
        h1.title = menuObject.tipo[i].toUpperCase();
        h1.appendChild(a);
    }
}