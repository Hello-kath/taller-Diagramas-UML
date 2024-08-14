class Empresa{
    constructor(nombre, direccion, telefono ){
        this.nombre = nombre;
        this.direccion = direccion; 
        this.telefono = telefono;
        this.clientes = [];
        this.empleados = [];
    }

    agregarEmpleado(empleado1, empleado2, empleado3, empleado4){
         empleado1 = new Empleado("Sara", "22", 900000, "Directivo");  
         empleado2 = new Empleado("Maicol", "18", 800000, "Empleado");
         empleado3 = new Empleado("Daniel", "25", 900000, "Directivo");
         empleado4 = new Empleado("Laura", "20", 800000, "Empleado");

         empleado1.calcularSueldoBruto();
         empleado2.calcularSueldoBruto();
         empleado3.calcularSueldoBruto();
         empleado4.calcularSueldoBruto();
    
        this.empleados.push(empleado1, empleado2, empleado3, empleado4);
    }

    agregarCliente(cliente1, cliente2){
         cliente1 = new Cliente("Nicolas", "25","3112476429")
         cliente2 = new Cliente("Jimena", "20","3125549761")

        this.clientes.push(cliente1, cliente2)

    }

    mostrarInfo(){

        let infoCli = ""
        let infoEmp = ""
        for(let i=0; i<this.clientes.length; i++){
            infoCli += this.clientes[i].infoCliente()
        }

        for(let i=0; i<this.empleados.length; i++){
            infoEmp += this.empleados[i].infoEmpleado()
        }
        return `La empresa: ${this.nombre}, direccion: ${this.direccion}, telefono: ${this.telefono} 
                tiene los siguientes clientes: ${infoCli}, y los siguientes Empleados: ${infoEmp}`
        

    }
}

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    infoPersona(){
         return `Nombre: ${this.nombre}, Edad: ${this.edad}`
    }
}

class Empleado extends Persona{
    constructor(nombre, edad, salario, tipo){
        super(nombre, edad);
        this.salario = salario;
        this.tipo = tipo;
    }

    calcularSueldoBruto(){
        let valor = 50000;
        this.salario = this.salario + valor
    }

    infoEmpleado(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Suledo Bruto: ${this.salario}, Tipo: ${this.tipo}`
    }
}

class Cliente extends Persona{
    constructor(nombre, edad, telefono){
        super(nombre, edad);
        this.telefono = telefono
    }

    infoCliente(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Telefono: ${this.telefono}`
    }
}

//instancia para la clase empresa
let miEmpresa = new Empresa("Confacauca", "Centro", "311485999");
miEmpresa.agregarEmpleado();
miEmpresa.agregarCliente();
console.log(miEmpresa.mostrarInfo());