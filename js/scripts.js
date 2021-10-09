let carrito = []
let porciones = []
if(localStorage.carrito != null) {
    carrito = JSON.parse(localStorage.carrito);
    document.getElementById("theCart").innerHTML = carrito.length;     
    
} 
if(localStorage.porciones != null) {
    porciones = JSON.parse(localStorage.porciones);
}


fetch('./productos.json')
  .then(response => response.json())
  .then(data => theCards(data));


function theCards(productos) {
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
                <input class="inputNumber" productID="${productos.pasta}"  type="number" value="1" >
            </div>
        </div>
    </div>`        
    document.getElementById("losProductos").innerHTML = acumuladores;
})}

let cantidadElegida = 0 




//DEFINIR QUE OBJETO SELECCIONARON
function agregarAlCarrito(pasta) {    
    const encontrarProducto = productos.find(productos => productos.pasta === pasta)    

    if(encontrarProducto != undefined){        
        let theInput = document.getElementsByClassName("inputNumber")
        
        for (const input of theInput){
            if (input.getAttribute('productID') == encontrarProducto.pasta) {
                cantidadElegida = input.value;                              
            }
        }        
        carrito.push(encontrarProducto); 
        porciones.push(cantidadElegida) 

    } else{
        alert("Ocurrio un error");
    }
    
    document.getElementById("theCart").innerHTML = carrito.length; 

    localStorage.carrito = JSON.stringify(carrito);
    localStorage.porciones = JSON.stringify(porciones); 
    console.log(carrito);
    console.log(porciones)
}

function recorrerPorciones(){ // Permite tener las porciones para sumar
    for(const i = 0; i < porciones.length; i++) {
        return Number(porciones[i])
    }
}

//AGREGARLO AL CARRITO
function mostrarProd(){  //LLAMADO EN UN ONCLICK EN LINEA 38 DEL HTML
let mostrar = ``;
carrito.forEach((element) => {    
    mostrar += `<div class="carritoProd">    
    <img class="imgCarrito" src="${element.img}">
    <p> ${element.pasta}</p>       
    <p class="precios">$ ${(element.precio) * recorrerPorciones()}</p> 
    <button onclick="eliminarProducto('${element.pasta}')" >X</button>   
 </div>` 
})


document.getElementById("carritoModal").innerHTML = mostrar;

const buttonComprar = $("#buttonBuy")   //JQUERY
buttonComprar.on('click', () => {
    alert("gracias por su compra")
    carrito = [];
    porciones = [];
    $("#carritoModal").html(carrito) 
    $("#theCart").html(carrito.length);});
}

function eliminarProducto(producto) {
    carrito = carrito.filter(element => element.pasta != producto)
    mostrarProd();
}


//VACIAR EL CARRITO
document.getElementById("boton-vaciar").addEventListener('click', vaciarCarrito)
function vaciarCarrito(evento){    
    localStorage.clear();
    carrito = [];
    porciones = [];
    input = 0
    document.getElementById("carritoModal").innerHTML = carrito    
    document.getElementById("theCart").innerHTML = carrito.length;
}









