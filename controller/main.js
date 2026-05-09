let indiceEditar = null;

// CREAR EMPLEADO
function crearEmpleado() {

    const empleado = new Empleado(

        document.getElementById('tipoDocumentoId').value,
        document.getElementById('documentoId').value,
        document.getElementById('nombreId').value,
        document.getElementById('apellidosId').value,
        document.getElementById('emailId').value,
        document.getElementById('usuarioId').value,
        document.getElementById('pwdId').value,
        document.getElementById('sueldoBaseId').value,
        document.getElementById('tipoBonificacionId').value
    );

    let empleados = JSON.parse(localStorage.getItem('Empleados')) || [];

    if (indiceEditar === null) {

        empleados.push(empleado);

    } else {

        empleados[indiceEditar] = empleado;

        indiceEditar = null;
    }

    localStorage.setItem('Empleados', JSON.stringify(empleados));

    document.getElementById('formEmpleado').reset();

    mostrarEmpleados();

    ocultarFormulario();
}

// MOSTRAR EMPLEADOS
function mostrarEmpleados() {

    let empleados = JSON.parse(localStorage.getItem('Empleados')) || [];

    let listado = document.getElementById('listadoEmpleados');

    listado.innerHTML = '';

    empleados.forEach((emp, index) => {

        listado.innerHTML += `

            <tr class="text-center">

                <td>${index + 1}</td>
                <td>${emp.tipo_documento}</td>
                <td>${emp.cc}</td>
                <td>${emp.nombre}</td>
                <td>${emp.apellido}</td>
                <td>${emp.email}</td>
                <td>${emp.usuario}</td>

                <td>$ ${emp.sueldoBase.toLocaleString()}</td>

                <td>${emp.tipoBonificacion}</td>

                <td>$ ${emp.adicion.toLocaleString()}</td>

                <td>$ ${emp.sueldoTotal.toLocaleString()}</td>

                <td>

                    <button class="btn btn-warning btn-sm"
                            onclick="editarEmpleado(${index})">

                        Editar
                    </button>

                    <button class="btn btn-danger btn-sm"
                            onclick="eliminarEmpleado(${index})">

                        Eliminar
                    </button>

                </td>

            </tr>
        `;
    });

    hallarTotalNomina();
}

// ELIMINAR
function eliminarEmpleado(index) {

    let empleados = JSON.parse(localStorage.getItem('Empleados')) || [];

    empleados.splice(index, 1);

    localStorage.setItem('Empleados', JSON.stringify(empleados));

    mostrarEmpleados();
}

// EDITAR
function editarEmpleado(index) {

    let empleados = JSON.parse(localStorage.getItem('Empleados')) || [];

    let emp = empleados[index];

    document.getElementById('tipoDocumentoId').value = emp.tipo_documento;

    document.getElementById('documentoId').value = emp.cc;

    document.getElementById('nombreId').value = emp.nombre;

    document.getElementById('apellidosId').value = emp.apellido;

    document.getElementById('emailId').value = emp.email;

    document.getElementById('usuarioId').value = emp.usuario;

    document.getElementById('pwdId').value = emp.password;

    document.getElementById('sueldoBaseId').value = emp.sueldoBase;

    document.getElementById('tipoBonificacionId').value =
        emp.tipoBonificacion;

    indiceEditar = index;

    mostrarFormRegistro();
}

// TOTAL NOMINA
function hallarTotalNomina() {

    let empleados = JSON.parse(localStorage.getItem('Empleados')) || [];

    let total = 0;

    empleados.forEach(emp => {

        total += parseFloat(emp.sueldoTotal);
    });

    document.getElementById('totalNomina').innerHTML =

        `Total Nómina: $ ${total.toLocaleString()}`;
}

mostrarEmpleados();