class Contrato extends Empleado {

    constructor(
        tiempoContrato,
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

        super(
            tipo_documento,
            cc,
            nombre,
            apellido,
            email,
            usuario,
            password,
            sueldoBase,
            tipoBonificacion
        );

        this.tiempoContrato = tiempoContrato;
    }
}