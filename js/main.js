class Product{
    constructor(pasta, precio, stock, img){
        this.pasta = pasta || undefined;
        this.precio = precio || undefined;
        this.stock = stock || undefined;
        this.img = img;
    }
    elStock(porciones){
        if (porciones <= productos[items].stock && porciones > 0){
            const resultadoCompra = productos[items].precio * porciones;
            return resultadoCompra;
        } else {
            alert("Disculpe, no tenemos stock para lo que solicitó") ;           
        }
    }   
}

const corazon = new Product(`Ravioles con forma de corazon rellenos con Capresse`, 450, 250, "./imagenes/0.jpeg");
const cappellacci = new Product(`Cappelacci rellenos de hongos`, 500, 500, "./imagenes/1.jpeg");
const caramelos = new Product(`Caramelos rellenos de remolacha`, 450, 90,"./imagenes/2.jpeg");
const pansotti = new Product(`Pansotti rellenos de calabaza`, 500, 120,"./imagenes/3.jpeg");
const ravioles = new Product(`Ravioles rellenos de queso de cabra y zanahora caramelizada`, 550, 6,"./imagenes/4.jpeg");
const sobrecitos = new Product(`Sobrecitos rellenos de ricota y verdura`, 500, 50,"./imagenes/5.jpeg");
const fideos = new Product(`Fideos con forma de flor`, 400, 34,"./imagenes/6.jpeg");

const productos = [
    corazon, cappellacci, caramelos, pansotti, ravioles, sobrecitos, fideos
];

const items = Number(prompt(`Bienvenido, porfavor elija el producto deseado ingresando el numero al lado de su eleccion: \n\n 0 = ${corazon.pasta} \n 1 = ${cappellacci.pasta} \n 2 = ${caramelos.pasta} \n 3 = ${pansotti.pasta} \n 4 = ${ravioles.pasta} \n 5 = ${sobrecitos.pasta} \n 6 = ${fideos.pasta}`))
const porciones = Number(prompt("Porfavor elija la cantidad de porciones solicitadas"));

function totalCompra(){
    return productos[items].elStock(porciones);
}


let cuotas = prompt(`Su total es de: ${totalCompra()} , elija su pago poniendo el numero al lado de su eleccion: \n\n1. Efectivo = (10% de Descuento) \n2. Debito = ${totalCompra()}`)

function resultadoFinal() {
    if (cuotas == "1"){
        const efectivoTotal = totalCompra() * 0.9;
        return efectivoTotal;
    } else {
        return totalCompra();
    }
}


function final () {    
    document.write(`\n\n <div class="laCompra"> 
    <h1> Gracias por comprar en Tierra de Pastas </h1> \n\n       
    <img src="${productos[items].img}"/>
    <p class="parrafo"> Usted ordenó </p> 
    <b class= "product"> ${porciones} </b> 
    <p class="parrafo"> porciones de: </p> 
    <b class= "product"> ${productos[items].pasta} </b> 
    <p class="parrafo"> Su total es de: </p> 
    <b class= "product"> $ ${resultadoFinal()} </b> 
    </div>`)    
    alert("Si quiere seguir comprando agregue al carrito debajo de la descripcion de su compra")
}
final();


const carrito = []
let acumuladores = ``;
productos.forEach((productos) => {
    acumuladores += `<div class = "laCompra">
    <img src="${productos.img}"/>        
    <p class="parrafo"> ${productos.pasta} </p> 
    <b class= "product"> $ ${productos.precio} </b> 
    <button class= "addCart" onclick="agregarAlCarrito('${productos.pasta}')"> Agregar al carrito </button>     
    </div>`        
})

document.write(acumuladores);


function agregarAlCarrito(pasta){    
    carrito.push(pasta);
    console.log(carrito);

}


