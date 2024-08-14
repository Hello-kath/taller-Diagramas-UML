class Pedido{
    constructor(nombreCliente, fechaPedido, stokProductos, productos, Pago){
        this.nombreCliente = nombreCliente;
        this.fechaPedido = fechaPedido;
        this.stokProductos = stokProductos || [];
        this.productos = productos || [];
        this.Pago = Pago;
    }

    clacularPrecioPedido(){
        let total = 0;
        for (let producto of this.productos) {
            total += (producto.precio + (producto.precio * producto.impuesto / 100)) * producto.stock
        }
        return total;
    }

    infoPedido(){
        let infoProd = "";
        for (let i = 0; i < this.productos.length; i++) {
            infoProd += this.productos[i].infoProducto() + " ";
        }
        return `El cliente: ${this.nombreCliente} realizó un pedido en la fecha: ${this.fechaPedido}.
        Productos pedidos: ${infoProd}
        Costo total: ${this.clacularPrecioPedido()}
        Método de pago: ${this.Pago.tipo}`;
    }
}

class Producto{
    constructor(nombreProducto, stock, precio, impuesto){
        this.nombreProducto = nombreProducto || [];
        this.stock = stock || []
        this.precio = precio || []
        this.impuesto = impuesto || []
    }

    infoProducto(){
        return `${this.nombreProducto} (Cantidad: ${this.stock}, Precio: ${this.precio}, Impuesto: ${this.impuesto}%)`;
    }
}

class Pago{
    constructor(valorPagar, tipo){
        this.valorPagar = valorPagar
        this.tipo = tipo
    }

    pagarTarjeta(fecha, numero, tipoTar){
        return `Pago con tarjeta ${tipoTar} - Número: ${numero}, Fecha: ${fecha}`;
    }

    pagarEfectivo(moneda){
        return `Pago en efectivo - Moneda: ${moneda}`;
    }

    pagarCheque(nombre, banco){
        return `Pago con cheque - Nombre: ${nombre}, Banco: ${banco}`;
    }
    
}

let locion = new Producto("jazmines", 6, 25000, 500);
let tinta = new Producto("tinta de lavios", 30, 15000, 200);
let pestañina = new Producto("Pestañina", 20, 18000, 200);
let delineador = new Producto("Delineador", 35, 15000, 200);
let rubor = new Producto("rubor", 25, 10000, 300);

const pago = new Pago(0, "Tarjeta de Crédito");

const pedido = new Pedido("Catalina Torres", "2024-04-13", [], [tinta, pestañina], pago);

console.log(pedido.infoPedido());