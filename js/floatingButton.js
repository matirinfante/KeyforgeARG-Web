/* Boton flotante para personalización según expansión*/

//Se busca en LocalStorage del browser si tiene alguna expansión seteada, default 'mm'.
if (localStorage.getItem('expansion') != null) {
    localStorage.getItem('expansion');
} else {
    localStorage.setItem('expansion', 'mm');
}

//Segun la expansión guardada, cambia.
switch (localStorage.getItem('expansion')) {
    case 'cota':
        $('body').addClass('cota');
        break;
    case 'aoa':
        $('body').addClass('aoa');
        break;
    case 'wc':
        $('body').addClass('wc');
        break;
    case 'mm':
        $('body').addClass('mm');
        break;
    case 'td':
        $('body').addClass('td');
        break;
}

function cambiarPrimeraExp() {
    //Agrego CotA
    $('body').addClass('cota');

    //Busco si existe alguna anteriormente y se quita
    if ($('body').hasClass('aoa')) {
        $('body').removeClass('aoa');
    }
    if ($('body').hasClass('mm')) {
        $('body').removeClass('mm');
    }
    if ($('body').hasClass('wc')) {
        $('body').removeClass('wc');
    }
    if ($('body').hasClass('td')) {
        $('body').removeClass('td');
    }

    localStorage.setItem('expansion', 'cota');
}

function cambiarSegundaExp() {
    //Agrego AoA
    $('body').addClass('aoa');
    //Busco si existe alguna anteriormente y se quita
    if ($('body').hasClass('cota')) {
        $('body').removeClass('cota');
    }
    if ($('body').hasClass('mm')) {
        $('body').removeClass('mm');
    }
    if ($('body').hasClass('wc')) {
        $('body').removeClass('wc');
    }
    if ($('body').hasClass('td')) {
        $('body').removeClass('td');
    }
    localStorage.setItem('expansion', 'aoa');
}

function cambiarTerceraExp() {
    //Agrego WC
    $('body').addClass('wc');
    //Busco si existe alguna anteriormente y se quita
    if ($('body').hasClass('cota')) {
        $('body').removeClass('cota');
    }
    if ($('body').hasClass('mm')) {
        $('body').removeClass('mm');
    }
    if ($('body').hasClass('aoa')) {
        $('body').removeClass('aoa');
    }
    if ($('body').hasClass('td')) {
        $('body').removeClass('td');
    }
    localStorage.setItem('expansion', 'wc');
}

function cambiarCuartaExp() {
    //Agrego MM
    $('body').addClass('mm');
    //Busco si existe alguna anteriormente y se quita
    if ($('body').hasClass('cota')) {
        $('body').removeClass('cota');
    }
    if ($('body').hasClass('aoa')) {
        $('body').removeClass('aoa');
    }
    if ($('body').hasClass('wc')) {
        $('body').removeClass('wc');
    }
    if ($('body').hasClass('td')) {
        $('body').removeClass('td');
    }
    localStorage.setItem('expansion', 'mm');
}

function cambiarQuintaExp() {
    //Agrego TD
    $('body').addClass('td');
    //Busco si existe alguna anteriormente y se quita
    if ($('body').hasClass('cota')) {
        $('body').removeClass('cota');
    }
    if ($('body').hasClass('aoa')) {
        $('body').removeClass('aoa');
    }
    if ($('body').hasClass('wc')) {
        $('body').removeClass('wc');
    }
    if ($('body').hasClass('mm')) {
        $('body').removeClass('mm');
    }
    localStorage.setItem('expansion', 'td');
}

// Despliega el botón
function botonToggle() {
    var desplegar = document.querySelector('.floating-button');
    desplegar.classList.toggle('active');
}



