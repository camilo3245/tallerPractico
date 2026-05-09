class Empleado {

    constructor(
        tipo_documento,
        cc,
        nombre,
        apellido,
        email,
        usuario,
        password,
        sueldoBase,
        tipoBonificacion
    ) {

        this.tipo_documento = tipo_documento;
        this.cc = cc;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.usuario = usuario;
        this.password = password;

        this.sueldoBase = parseFloat(sueldoBase);

        this.tipoBonificacion = tipoBonificacion;

        this.adicion = this.calcularBonificacion();

        this.sueldoTotal = this.sueldoBase + this.adicion;
    }

    calcularBonificacion() {

        switch (this.tipoBonificacion) {

            case 'A':
                return 200000;

            case 'B':
                return 150000;

            case 'C':
                return 100000;

            case 'D':
                return 50000;

            default:
                return 0;
        }
    }
}