let carrito = []
let productos2 = []
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
  .then(data => {
    productos2 = data  
   return theCards(productos2)});


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
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick="agregarAlCarrito('${productos.id}')">Agregar al carrito</a></div>            
                <input class="inputNumber" productID="${productos.id}"  type="number" value="1" >
            </div>
        </div>
    </div>`        
    document.getElementById("losProductos").innerHTML = acumuladores;
})}

let cantidadElegida = 0 
let theInput = document.getElementsByClassName("inputNumber")



//DEFINIR QUE OBJETO SELECCIONARON
function agregarAlCarrito(pasta) {    
    const encontrarProducto = productos2.find(productos => productos.id === pasta)    
    if(encontrarProducto != undefined){        
        let theInput = document.getElementsByClassName("inputNumber")
        
        for (const input of theInput){
            if (input.getAttribute('productID') == encontrarProducto.id) {
                cantidadElegida = input.value;                                              
            }
        }        
        carrito.push(encontrarProducto); 
        porciones.push({porciones: cantidadElegida, id: pasta}) 

    } else{
        alert("Ocurrio un error");
    }
    
    $("#theCart").html(carrito.length); //JQUERY

    localStorage.carrito = JSON.stringify(carrito);
    localStorage.porciones = JSON.stringify(porciones); 
     
}


// Permite tener las porciones para sumar
function recorrerPorciones(id){ 
    let lasPorciones ;
    porciones.forEach((por) => {        
        if(por.id === id){
            lasPorciones = por.porciones
        }
    })
    return lasPorciones;
}


let elTotal = 0
//MODAL DEL CARRITO
function mostrarProd(){  //LLAMADO EN UN ONCLICK EN LINEA 38 DEL HTML    
    let mostrar = ``;
    let calculoPrecioXpasta;
    elTotal = 0
    carrito.forEach((element) => {    
        calculoPrecioXpasta = element.precio * recorrerPorciones(element.id)
        elTotal = elTotal + calculoPrecioXpasta        
        mostrar += `<div class="carritoProd">    
    <img class="imgCarrito" src="${element.img}">
    <p> ${element.pasta}</p>       
    <p class="precios">$ ${calculoPrecioXpasta}</p>     
    <button onclick="eliminarProducto(${element.id})" >X</button>   
 </div>` 
})

document.getElementById("total").innerHTML = elTotal
document.getElementById("carritoModal").innerHTML = mostrar;

const buttonComprar = $("#buttonBuy")   //JQUERY
buttonComprar.on('click', () => {    
    carrito = [];
    porciones = [];    
    $("#carritoModal").html(carrito) 
    $("#theCart").html(carrito.length);
    alert(`Gracias por su compra, su total es de ${elTotal}`)});
}




//ELIMINAR PRODUCTOS INDIVIDUALMENTE
function eliminarProducto(id) {   
    let price;
    let name;
    carrito.forEach((item) => {
        if(item.id == id) {
            price = item.precio;
            name = item.pasta;
        }
    })
    let totalElim = document.getElementById("total")
    document.getElementById("total").innerHTML = totalElim - price  
    
    porciones = porciones.filter(element => element.id != id);
    carrito = carrito.filter(element => element.id != id);
    document.getElementById("theCart").innerHTML = carrito.length;
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









