//Escucha el evento y evita la acción por defecto
document.getElementById("formulario").addEventListener('submit', validarFormulario);
document.getElementById("formulario").onsubmit = (e) => {
    e.preventDefault();
}

function validarFormulario(evento) {

    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var fechanac = document.getElementById("fecha");
    var pais = document.getElementById("pais");
    var mail = document.getElementById("mail");
    var discord = document.getElementById("discordtag");
    var instagram = document.getElementById("iguser");
    var wpp = document.getElementById("wpp");
    var linkdok = document.getElementById("linkmazo");
    var exito = true;

    if (nombre.value === "" || nombre.value.match(/\d/)) {
        if (nombre.classList.contains("is-valid")) {
            nombre.classList.remove("is-valid");
        }
        nombre.classList.add("is-invalid");
        exito = false;
    } else {
        if (nombre.classList.contains("is-invalid")) {
            nombre.classList.remove("is-invalid");
        }
        nombre.classList.add("is-valid");
    }


    if (apellido.value === "" || apellido.value.match(/\d/)) {
        if (apellido.classList.contains("is-valid")) {
            apellido.classList.remove("is-valid");
        }
        apellido.classList.add("is-invalid");
        exito = false;
    } else {
        if (apellido.classList.contains("is-invalid")) {
            apellido.classList.remove("is-invalid");
        }
        apellido.classList.add("is-valid");
    }

    if (pais.value === "") {
        if (pais.classList.contains("is-valid")) {
            pais.classList.remove("is-valid");
        }
        pais.classList.add("is-invalid");
        exito = false;
    } else {
        if (pais.classList.contains("is-invalid")) {
            pais.classList.remove("is-invalid");
        }
        pais.classList.add("is-valid");
    }

    if (fechanac.value === "" || !testearFecha(fechanac.value)) {
        if (fechanac.classList.contains("is-valid")) {
            fechanac.classList.remove("is-valid");
        }
        fechanac.classList.add("is-invalid");
        exito = false;
    } else {

        if (fechanac.classList.contains("is-invalid")) {
            fechanac.classList.remove("is-invalid");
        }
        fechanac.classList.add("is-valid");
    }

    if (mail.value === "" || !mail.value.match(/([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/)) {
        if (mail.classList.contains("is-valid")) {
            mail.classList.remove("is-valid");
        }
        mail.classList.add("is-invalid");
        exito = false;
    } else {
        if (mail.classList.contains("is-invalid")) {
            mail.classList.remove("is-invalid");
        }
        mail.classList.add("is-valid");
    }

    if (discord.value === "" || !discord.value.match(/([A-Za-z0-9])+#([0-9]){4}/)) {
        if (discord.classList.contains("is-valid")) {
            discord.classList.remove("is-valid");
        }
        discord.classList.add("is-invalid");
        exito = false;
    } else {
        if (discord.classList.contains("is-invalid")) {
            discord.classList.remove("is-invalid");
        }
        discord.classList.add("is-valid");
    }

    if (instagram.value === "") {
        if (instagram.classList.contains("is-valid")) {
            instagram.classList.remove("is-valid");
        }
        instagram.classList.add("is-invalid");
        exito = false;

    } else {
        if (instagram.classList.contains("is-invalid")) {
            instagram.classList.remove("is-invalid");
        }
        instagram.classList.add("is-valid");
    }

    if (wpp.value === "" || isNaN(wpp.value)) {
        if (wpp.classList.contains("is-valid")) {
            wpp.classList.remove("is-valid");
        }
        wpp.classList.add("is-invalid");
        exito = false;

    } else {
        if (wpp.classList.contains("is-invalid")) {
            wpp.classList.remove("is-invalid");
        }
        wpp.classList.add("is-valid");
    }

    if (linkdok.value === "") {
        if (linkdok.classList.contains("is-valid")) {
            linkdok.classList.remove("is-valid");
        }
        linkdok.classList.add("is-invalid");
        exito = false;

    } else {
        if (linkdok.classList.contains("is-invalid")) {
            linkdok.classList.remove("is-invalid");
        }
        linkdok.classList.add("is-valid");
    }
    return exito;
}

/* Función para verificar que la fecha sea correcta, considerando años bisiestos y una restricción de fecha de nacimiento */
function testearFecha(fecha) {

    //La fecha por input ingresa yyyymmdd
    var exito = true;
    if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(fecha)) {
        exito = false;
    } else {
        var split = fecha.split("-");
        var anio = parseInt(split[0], 10);
        var mes = parseInt(split[1], 10);
        var dia = parseInt(split[2], 10);
        var anioActual = new Date().getFullYear();

        if (anio < 1900 || anio > anioActual - 6 || mes === 0 || mes > 12) {
            exito = false;
        } else {

            var rangoMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            //Condicion bisiesto
            if (anio % 400 === 0 || (anio % 100 !== 0 && anio % 4 === 0)) {
                rangoMeses[1] = 29;
            }
            //Dia mayor a 0 y el dia max del mes correspondiente
            if (!(dia > 0 && dia <= rangoMeses[mes - 1])) {
                exito = false;
            }
        }
    }
    return exito;
}

/* Función para cambiar input field según opción */
function seleccionar() {
    email = document.getElementById("tipoemail").checked;
    discord = document.getElementById("tipodiscord").checked;
    instagram = document.getElementById("tipoinstagram").checked;
    wpp = document.getElementById("tipowpp").checked;

    if (email) {
        document.getElementById("campoemail").style.display = "block";
        document.getElementById("campodiscord").style.display = "none";
        document.getElementById("campoinstagram").style.display = "none";
        document.getElementById("campowpp").style.display = "none";
    } else if (discord) {
        document.getElementById("campoemail").style.display = "none";
        document.getElementById("campodiscord").style.display = "block";
        document.getElementById("campoinstagram").style.display = "none";
        document.getElementById("campowpp").style.display = "none";
    } else if (instagram) {
        document.getElementById("campoemail").style.display = "none";
        document.getElementById("campodiscord").style.display = "none";
        document.getElementById("campoinstagram").style.display = "block";
        document.getElementById("campowpp").style.display = "none";
    } else if (wpp) {
        document.getElementById("campoemail").style.display = "none";
        document.getElementById("campodiscord").style.display = "none";
        document.getElementById("campoinstagram").style.display = "none";
        document.getElementById("campowpp").style.display = "block";
    }
}

/* Cambia el prepend del input field teléfono según pais*/
function cambiarPrepend() {
    var pais = document.getElementById("pais").value;
    var inputprepend = document.getElementById("prependwpp");
    switch (pais) {
        case "ar":
            inputprepend.innerHTML = "+54";
            break;
        case "cl":
            inputprepend.innerHTML = "+56";
            break;
        case "col":
            inputprepend.innerHTML = "+57";
            break;
        case "ecu":
            inputprepend.innerHTML = "+593"
            break;
        case "pe":
            inputprepend.innerHTML = "+51"
            break;
        case "uy":
            inputprepend.innerHTML = "+598"
            break;
    }
}
