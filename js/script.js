function mostrarFormRegistro() {

    document.getElementById('seccionRegistrarse').style.display =
        'block';

    document.getElementById('seccionRegistrarse')
        .scrollIntoView({ behavior: 'smooth' });
}

function ocultarFormulario() {

    document.getElementById('seccionRegistrarse').style.display =
        'none';
}