let carrito = []
if(localStorage.carrito != null) {
    carrito = JSON.parse(localStorage.carrito);
    document.getElementById("theCart").innerHTML = carrito.length; 
} 

//CREACION DE LAS CARDS

let acumuladores = ``;
let cantCero = 0
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

    localStorage.carrito = JSON.stringify(carrito);
    console.log(carrito);
}

//AGREGARLO AL CARRITO
function mostrarProd(){  //LLAMADO EN UN ONCLICK EN LINEA 38 DEL HTML
let mostrar = ``;
carrito.forEach((element) => {
    mostrar += `<div class="carritoProd">    
    <img class="imgCarrito" src="${element.img}">
    <p> ${element.pasta}</p>
    <input class="inputNumber" type="number" value="1" >
    <p>$ ${element.precio}</p>    
 </div>`
})

document.getElementById("carritoModal").innerHTML = mostrar;

const buttonComprar = $("#buttonBuy")   //JQUERY
buttonComprar.on('click', () => {
    alert("gracias por su compra")
    carrito = [];
    $("#carritoModal").html(carrito) 
    $("#theCart").html(carrito.length);});
}

//VACIAR EL CARRITO
document.getElementById("boton-vaciar").addEventListener('click', vaciarCarrito)
function vaciarCarrito(evento){     
    localStorage.clear();
    carrito = [];
    document.getElementById("carritoModal").innerHTML = carrito    
    document.getElementById("theCart").innerHTML = carrito.length;
}









