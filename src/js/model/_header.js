
function incluirHeader(){
    document.getElementById("header").innerHTML =
        '<!--        imagen isotipo-->\n' +
        '        <img class="header-imagen" src="img/image1.png" alt="brand">\n' +
        '<!--        header derecho-->\n' +
        '        <div class="header-derecho">\n' +
        '<!--            contacto-->\n' +
        '            <div class="header-contacto">\n' +
        '                <h4 class="contacto-titulo">ordene: </h4>\n' +
        '                <div class="contacto-numero-icon">\n' +
        '                    <a class="numero" href="#">012-3456789</a>\n' +
        '                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n' +
        '                            <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>\n' +
        '                            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>\n' +
        '                        </svg>\n' +
        '\n' +
        '                </div>\n' +
        '            </div>\n' +
        '<!--            horario-->\n' +
        '            <div class="header-horario">\n' +
        '                <h5 class="horario">viernes a domingos:</h5>\n' +
        '                <h5 class="horario">11AM - 5PM\n' +
        '                    <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">\n' +
        '                        <path d="M3 12a9 9 0 0 0 9 9m9 -9a9 9 0 1 0 -18 0"></path>\n' +
        '                        <path d="M12 7v5l.5 .5"></path>\n' +
        '                        <path d="M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"></path>\n' +
        '                        <path d="M15 21v-6"></path>\n' +
        '                    </svg>\n' +
        '                </h5>\n' +
        '            </div>\n' +
        '<!--            ubicacion y menu-->\n' +
        '            <div class="header-ubicacion-menu" href="#">\n' +
        '<!--                ubicacion-->\n' +
        '                <div class="ubicacion-menu">\n' +
        '                    <a class="ubicacion" href="https://maps.app.goo.gl/kL6vVi29RwJ9ih5H6">\n' +
        '                        <h5 class="titulo-ubicacion">ubicanos aqui!</h5>\n' +
        '                        <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">\n' +
        '                        <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>\n' +
        '                        <path d="M9 4v13"></path>\n' +
        '                        <path d="M15 7v5.5"></path>\n' +
        '                        <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path>\n' +
        '                        <path d="M19 18v.01"></path>\n' +
        '                    </svg>\n' +
        '                    </a>\n' +
        '                </div>\n' +
        '<!--                boton menu-->\n' +
        '                <div class="boton-menu">\n' +
        '                    <button class="barra-menu" id="btnmenu" type="button" onclick="" >\n' +
        '                        <h5 class="titulo-ubicacion">menu</h5>\n' +
        '                    </button>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>';
    const script = document.createElement("script");
    script.src = "src/js/Function/_crearMenuNav.js";
    script.async = true;
    document.body.appendChild(script);
}