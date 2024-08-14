class Matrimonio {
    constructor(personas, lugar, fecha) {
        this.lugar = lugar;
        this.fecha = fecha
        this.personas = personas || []
    }

    agregarJuez(persona) {
        if (persona.cargo === "Juez") {
            //verificamos el cargo del objeto ingresado mediante la siguiente condicion
            for (let i = 0; i < this.personas.length; i++) {
                //verificamos si el atributo cargo existe en alguno de los objetos almacenados en el array personas
                if (this.personas[i].cargo === "Juez") {
                    //si existe, remplazamos el objeto por el nuevo que se esta ingresando
                    this.personas[i] = persona;
                    return;
                }
            }
            //si no existe, lo agregamos al array
            this.personas.push(persona);
        } else {
            console.log("El cargo de la persona no es Juez");
        }
    }

    agregarTestigo(testigo) {
        if (testigo.cargo === "Testigo") {
            for (let i = 0; i < this.personas.length; i++) {
                if (this.personas[i].cargo === "Testigo") {
                    this.personas[i] = testigo;
                    return;
                }
            }
            this.personas.push(testigo);
        } else {
            console.log("El cargo de la persona no es Testigo");
        }

    }

    agregarContrayente(contrayente) {
        if (contrayente.cargo === "contrayente") {
            for (let i = 0; i < this.personas.length; i++) {
                if (this.personas[i].cargo === "contrayente") {
                    this.personas[i] = contrayente;
                    return;
                }
            }
            this.personas.push(contrayente);
        } else {
            console.log("El cargo de la persona no es contrayente");
        }
        
    }

    mostrarInfo() {
        //variable para almacenar o concatenar la informacion de los datos de las personas junto con el de matrimonio
        let datosPersonas = ""
        for (let i = 0; i < this.personas.length; i++) {
            datosPersonas += this.personas[i].mostrarInfo()
        }
        return `El matrimonio tuvo lugar en la; ${this.lugar} en la fecha: ${this.fecha} 
                los Datos de las personas son; ${datosPersonas} `
    }


}

class Persona {
    constructor(nombre, apellidos, edad, sexo, domicilio, cargo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.sexo = sexo;
        this.domicilio = domicilio;
        this.cargo = cargo;
    }

    mostrarInfo() {
        switch (this.cargo) {
            case "Juez":
                return `
                    El Juez es: ${this.nombre} ${this.apellidos} 
                    Edad: ${this.edad}
                    Sexo: ${this.sexo}
                    Domicilio: ${this.domicilio}`;

            case "contrayente":
                return `
                    El Contrayente es: ${this.nombre} ${this.apellidos} 
                    Edad: ${this.edad}
                    Sexo: ${this.sexo}
                    Domicilio: ${this.domicilio}`;

            case "Testigo":
                return `
                    El Testigo es: ${this.nombre} ${this.apellidos} 
                    Edad: ${this.edad}
                    Sexo: ${this.sexo}
                    Domicilio: ${this.domicilio}`;

            default:
                return `Cargo no reconocido para ${this.nombre} ${this.apellidos}`;
        }
    }

}

//creamos la instacia de la clase persona

let persona1 = new Persona("Cristian", "Zemanate", "25", "Masculino", "Centro", "Juez");
let persona2 = new Persona("Carlos", "Ramirez", "30", "Masculino", "Los Angeles", "Testigo");
let persona3 = new Persona("Karol", "Botina", "23", "Femenino", "Los Angeles", "Testigo");
let persona4 = new Persona("Alejandro", "Bickle", "28", "Masculino", "Arrayanes", "contrayente");
let persona5 = new Persona("Catalina", "Garcia", "25", "Femenino", "Pomona", "contrayente");
//creamos la instancia de la clase matrimonio
let matrimonio = new Matrimonio([persona1, persona2, persona3, persona4, persona5], "Iglesia San Francisco", "15-04-2024");
//console.log(matrimonio.mostrarInfo());
//creamos un nuevo objeto persona para pasarsela al metodo agregar juez
let persona6 = new Persona("sofia", "Garcia", "23", "Femenino", "Altos de Morinda", "Juez");
//objeto para testigo
let persona7 = new Persona("Juan", "Muñoz", "24", "Masculino", "Santa ines", "Testigo");
//objeto para contrayente
let persona8 = new Persona("Cristian", "sol-Arte", "26", "Masculino", "Robles", "contrayente");
//mandamos el objeto al metodo agregar Juez
matrimonio.agregarJuez(persona6);
//verificamos nuevamente la informacion
//console.log(matrimonio.mostrarInfo());
//mandamos el objeto al metodo agregar testigo
matrimonio.agregarTestigo(persona7);
//console.log(matrimonio.mostrarInfo());
matrimonio.agregarContrayente(persona8);
console.log(matrimonio.mostrarInfo());