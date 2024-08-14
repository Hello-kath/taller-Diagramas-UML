class Biblioteca {
    constructor(direccion, telefono) {
        this.direccion = direccion;
        this.telefono = telefono;
        this.libros = [];
        this.librosPrestados = [];
    }

    prestarLibro(titulo, nombreLector) {
        let libro = null;
        for (let i = 0; i < this.libros.length; i++) {
            if (this.libros[i].titulo === titulo && this.libros[i].estado === 'En biblioteca') {
                libro = this.libros[i];
                break;
            }
        }

        if (libro == null) {
            return `El libro ${titulo} no está disponible.`;
        }

        let librosDelLector = 0;
        for (let i = 0; i < this.librosPrestados.length; i++) {
            if (this.librosPrestados[i].lector === nombreLector) {
                librosDelLector++;
            }
        }

        if (librosDelLector >= 3) {
            return `El lector ${nombreLector} ya tiene el máximo de libros prestados.`;
        }

        libro.estado = 'Prestado';
        let fechaPrestamo = new Date();
        let fechaDevolucion = new Date(fechaPrestamo);
        fechaDevolucion.setDate(fechaPrestamo.getDate() + 30);
        this.librosPrestados.push({ libro, lector: nombreLector, fechaPrestamo, fechaDevolucion });
        return `El libro ${titulo} ha sido prestado a ${nombreLector}.`;
    }

    devolverLibro(titulo, nombreLector) {
        let indicePrestamo = -1;
        for (let i = 0; i < this.librosPrestados.length; i++) {
            if (this.librosPrestados[i].libro.titulo === titulo && this.librosPrestados[i].lector === nombreLector) {
                indicePrestamo = i;
                break;
            }
        }

        if (indicePrestamo === -1) {
            return `no hay ningun prestamos registrado del libro: ${titulo} del lector ${nombreLector}.`;
        }

        let prestamo = this.librosPrestados[indicePrestamo];
        let fechaActual = new Date();
        let diasRetraso = 0;

        // Calcular días de retraso manualmente
        let diferenciaTiempo = fechaActual - prestamo.fechaDevolucion;
        if (diferenciaTiempo > 0) {
            diasRetraso = diferenciaTiempo / (1000 * 60 * 60 * 24);
            diasRetraso = parseInt(diasRetraso);
        }

        let mensaje = `El libro ${titulo} ha sido devuelto por ${nombreLector}.`;

        if (diasRetraso > 0) {
            let diasPenalizacion = diasRetraso * 2;
            mensaje += ` Hubo un retraso de ${diasRetraso} días. Penalización: ${diasPenalizacion} días sin poder coger un nuevo libro.`;
        }

        prestamo.libro.estado = 'En biblioteca';
        this.librosPrestados.splice(indicePrestamo, 1);

        return mensaje;
    }

    mostrarInfo() {
        let infoLibros = "";
        for (let i = 0; i < this.libros.length; i++) {
            infoLibros += this.libros[i].mostrarInfo() + " ";
        }

        let infoPrestamos = "";
        for (let i = 0; i < this.librosPrestados.length; i++) {
            let prestamo = this.librosPrestados[i];
            let fechaPrestamo = `${prestamo.fechaPrestamo.getDate()}  ${prestamo.fechaPrestamo.getMonth() + 1}  ${prestamo.fechaPrestamo.getFullYear()}`;
            let fechaDevolucion = `${prestamo.fechaDevolucion.getDate()}/${prestamo.fechaDevolucion.getMonth() + 1} ${prestamo.fechaDevolucion.getFullYear()}`;
            infoPrestamos += `Título: ${prestamo.libro.titulo}, Prestado a: ${prestamo.lector}, Fecha de préstamo: ${fechaPrestamo}, Fecha de devolución: ${fechaDevolucion}\n`;
        }

        return `Biblioteca ${this.direccion}, Teléfono: ${this.telefono}
        Libros en la biblioteca: ${infoLibros}
        Libros prestados:\n${infoPrestamos}`;
    }
}

class Libro {
    constructor(titulo, tipo, autor, editorial, año, numCopia, estado = 'En biblioteca') {
        this.titulo = titulo;
        this.tipo = tipo;
        this.editorial = editorial;
        this.año = año;
        this.autor = autor;
        this.numCopia = numCopia;
        this.estado = estado;
    }

    mostrarInfo() {
        return `Título: ${this.titulo}, Tipo: ${this.tipo}, Editorial: ${this.editorial}, Año: ${this.año}, Autor: ${this.autor.nombre}, Estado: ${this.estado}`;
    }
}

class Autor {
    constructor(nombre, nacionalidad, fechaNacimiento) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.fechaNacimiento = fechaNacimiento;
    }

    mostrarInfo() {
        return `Autor: ${this.nombre}, Nacionalidad: ${this.nacionalidad}, Fecha de Nacimiento: ${this.fechaNacimiento}`;
    }
}

class Lector {
    constructor(nombre) {
        this.nombre = nombre;
    }

    mostrarInfo() {
        return `Lector: ${this.nombre}`;
    }
}


//autores
let autor1 = new Autor("Mario Mendoza", "Colombiano", "1964-06-01");
let autor2 = new Autor("Isabel Allende", "Peru", "1942-02-8");
// libros
let libro1 = new Libro("La melancolia de los feos", "Novela", autor1, "Planeta", "1967",  1);
let libro2 = new Libro("La casa de los espiritus", "Poesía", autor2, "Sudamericana", "1924",  2);
// biblioteca
let biblioteca = new Biblioteca("confacauca", "centro");
// Agregar libros 
biblioteca.libros.push(libro1);
biblioteca.libros.push(libro2);
// lector
let lector1 = new Lector("Sara Ruiz");

// Prestar un libro al lector
console.log(biblioteca.prestarLibro("La melancolia de los feos", "Sara Ruiz"));

// Intentar prestar un libro que ya está prestado
console.log(biblioteca.prestarLibro("La melancolia de los feos", "Sara Ruiz"));

// Devolver el libro
console.log(biblioteca.devolverLibro("La melancolia de los feos", "Sara Ruiz"));

// Mostrar la información de la biblioteca
console.log(biblioteca.mostrarInfo());

