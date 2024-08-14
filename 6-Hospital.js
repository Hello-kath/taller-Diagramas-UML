class Paciente {
    constructor(numHistoria, nombre, direccion) {
        this.numHistoria = numHistoria;
        this.nombre = nombre;
        this.direccion = direccion;
        this.medicos = [];
        this.enfermeros = [];
        this.analisis = [];
    }

    agregarMedico(medico) {
        this.medicos.push(medico);
    }

    agregarEnfermero(enfermero) {
        this.enfermeros.push(enfermero);
    }

    agregarAnalisis(analisis) {
        this.analisis.push(analisis);
    }

    mostrarInfo() {
        let infoMedicos = "";
        let infoEnfermeros = "";
        let infoAnalisis = "";

        for (let i = 0; i < this.medicos.length; i++) {
            infoMedicos += this.medicos[i].mostrarInfo() + " ";
        }

        for (let i = 0; i < this.enfermeros.length; i++) {
            infoEnfermeros += this.enfermeros[i].mostrarInfo() + " ";
        }

        for (let i = 0; i < this.analisis.length; i++) {
            infoAnalisis += this.analisis[i].mostrarInfo() + " ";
        }

        return `Paciente: ${this.nombre}, Direccion: ${this.direccion}, Historia Clinica: ${this.numHistoria}
                Medicos: ${infoMedicos}
                Enfermeros: ${infoEnfermeros}
                Analisis: ${infoAnalisis}`;
    }
}

class PersonalSanitario {
    constructor(numEmpleado, nombre, tipo) {
        this.numEmpleado = numEmpleado;
        this.nombre = nombre;
        this.tipo = tipo;
    }

    mostrarInfo() {
        return `${this.tipo}: ${this.nombre}, Numero de empleado: ${this.numEmpleado}`;
    }
}

class Medico extends PersonalSanitario {
    constructor(numEmpleado, nombre, especialidad) {
        super(numEmpleado, nombre, "Medico");
        this.especialidad = especialidad;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Especialidad: ${this.especialidad}`;
    }
}

class Enfermero extends PersonalSanitario {
    constructor(numEmpleado, nombre) {
        super(numEmpleado, nombre, "Enfermera");
    }
}

class Analisis {
    constructor(numReferencia, tipo, fecha, medico, enfermeros, resultados) {
        this.numReferencia = numReferencia;
        this.tipo = tipo;
        this.fecha = fecha;
        this.medico = medico;
        this.enfermeros = enfermeros || [];
        this.resultados = resultados;
    }

    mostrarInfo() {
        let infoEnfermeros = "";
        for (let i = 0; i < this.enfermeros.length; i++) {
            infoEnfermeros += this.enfermeros[i].mostrarInfo();
        }

        return `Analisis: ${this.tipo}, Fecha: ${this.fecha}, Medico: ${this.medico.mostrarInfo()}
                Enfermeros: ${infoEnfermeros}
                Resultados: ${this.resultados}`;
    }
}

// Crear medicos y enfermeros
let medico1 = new Medico(1, "Dr. Monica", "Cardiologia");
let enfermero1 = new Enfermero(1, "Laura");
let enfermero2 = new Enfermero(2, "Yina");

// Crear un paciente
let paciente1 = new Paciente(1001, "Katherine Vasquez", "Urbanizacion Los Robles");

// Agregar medicos y enfermeros al paciente
paciente1.agregarMedico(medico1);
paciente1.agregarEnfermero(enfermero1);
paciente1.agregarEnfermero(enfermero2);

// Crear un analisis y agregarlo al paciente
let analisis1 = new Analisis(5001, "Sangre", "2024-08-15", medico1, [enfermero1, enfermero2], "Anemia");
paciente1.agregarAnalisis(analisis1);

// Mostrar la informacion del paciente
console.log(paciente1.mostrarInfo());

