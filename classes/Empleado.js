const Persona = require('./Persona.js')

module.exports = class Empleado extends Persona{ //aun bajo pruebas
    constructor(nombre, apellido, usuario, cedula, direccion, telefono, salario, cargo) {
        super(nombre, apellido, usuario, cedula, direccion, telefono, "emlpeado")
        this.salario = salario
        this.cargo = cargo
    }

    toString(){
        return `Empleado
Nombre: ${this.nombre}
Apellido: ${this.apellido}
Cedula: ${this.cedula}
Direccion: ${this.direccion}
Telefono: ${this.telefono}
Salario: ${this.salario}
Cargo: ${this.cargo}`
    }
}