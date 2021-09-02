class Product{
    constructor(pasta, precio, stock, img){
        this.pasta = pasta || undefined;
        this.precio = precio || undefined;
        this.stock = stock || undefined;
        this.img = img;
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

//CREACION DE LAS CARDS
const carrito = []
let acumuladores = ``;
productos.forEach((productos) => {
    acumuladores += `<div class="col mb-5">
        <div class="card h-100">            
            <img class="card-img-top" src="${productos.img}" alt="..." />            
            <div class="card-body p-4">
                <div class="text-center">
                <h5 class="fw-bolder">${productos.pasta} </h5>
                $ ${productos.precio}                   
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" id="buttonsProd">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick="agregarAlCarrito('${productos.pasta}')">Agregar al carrito</a></div>
                <div class="qtyProd"> <input class="inputNumber" type= "number" value="1"> </div>
            </div>
        </div>
    </div>`        
})

document.getElementById("losProductos").innerHTML = acumuladores;

//DEFINIR QUE OBJETO SELECCIONARON
function agregarAlCarrito(pasta) {
    const encontrarProducto = productos.find(productos => productos.pasta === pasta)
    if(encontrarProducto != undefined){
        carrito.push(encontrarProducto);         
    } else{
        alert("Ocurrio un error");
    }
    document.getElementById("theCart").innerHTML = carrito.length; 
    console.log(carrito);
}

//AGREGARLO AL CARRITO
function mostrarProd(){ 
let mostrar = ``;
carrito.forEach((element) => {
    mostrar += `<div class="carritoProd">
    <img class="imgCarrito" src="${element.img}"/>
    <p>${element.pasta}</p>
    <p>$ ${element.precio}</p>
    </div> `
})
document.getElementById("carritoModal").innerHTML = mostrar;
}








