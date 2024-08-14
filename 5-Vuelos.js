class Compañia {
    constructor(nombre) {
        this.nombre = nombre;
        this.flota = []; 
    }

    agregarAvion(modelo, capacidad) {
        this.flota.push({ modelo, capacidad });
    }

    crearVuelo(fecha, numPuestos) {
    
        for (let i = 0; i < this.flota.length; i++) {
            if (this.flota[i].capacidad >= numPuestos) {
                let vuelo = new Vuelo(fecha, numPuestos, this.flota[i]);
                return vuelo;
            }
        }
        return "No hay aviones disponibles con esa capacidad.";
    }
}

class Vuelo {
    constructor(fecha, numPuestos, avión) {
        this.fecha = fecha;
        this.númeroPuestos = numPuestos;
        this.asientosOcupados = 0;
        this.avión = avión;
        this.pasajeros = [];
    }

    reservarAsiento(nombre, apellidos, edad) {
        if (this.asientosOcupados < this.númeroPlazas) {
            let númeroAsiento = this.asientosOcupados + 1; 
            let pasajero = new Pasajero(nombre, apellidos, edad, númeroAsiento);
            this.pasajeros.push(pasajero);
            this.asientosOcupados++;
            return `Asiento ${númeroAsiento} reservado para ${nombre} ${apellidos}.`;
        } else {
            return 'No hay asientos disponibles.';
        }
    }

    mostrarInfo() {
        let infoPasajeros = "";
        for (let i = 0; i < this.pasajeros.length; i++) {
            infoPasajeros += this.pasajeros[i].mostrarInfo() + "\n";
        }
        return `Vuelo el ${this.fecha} con ${this.númeroPlazas} plazas totales.
                Avión: ${this.avión.modelo}, Capacidad: ${this.avión.capacidad}
                Pasajeros:\n${infoPasajeros}`;
    }
}

class Pasajero {
    constructor(nombre, apellidos, edad, numAsiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.numAsiento = numAsiento;
    }

    mostrarInfo() {
        return `Pasajero: ${this.nombre} ${this.apellidos}, Edad: ${this.edad}, Asiento: ${this.numAsiento}`;
    }
}

// Crear una compañía
let avianca = new Compañia("Avianca");

// Agregar avion a la flota 
avianca.agregarAvion("avion 737", 150);
avianca.agregarAvion("avion A320", 180);

// Crear un vuelo
let vuelo = avianca.crearVuelo("2024-12-15", 100);

// Reservar asientos en el vuelo
console.log(vuelo.reservarAsiento("Felipe", "Escobar", 30));
console.log(vuelo.reservarAsiento("Sthefany", "García", 25));

// Mostrar la información del vuelo
console.log(vuelo.mostrarInfo());
