class Product{
    constructor(pasta, precio, stock){
        this.pasta = pasta || undefined;
        this.precio = precio || undefined;
        this.stock = stock || undefined;
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

const productos = [
    new Product(`Ravioles con forma de corazon rellenos con Capresse`, 450, 250),
    new Product(`Cappelacci rellenos de hongos`, 500, 500),
    new Product(`Caramelos rellenos de remolacha`, 450, 90),
    new Product(`Pansotti rellenos de calabaza`, 500, 120),
    new Product(`Ravioles rellenos de queso de cabra y zanahora caramelizada`, 550, 6),
    new Product(`Sobrecitos rellenos de ricota y verdura`, 500, 50),
    new Product(`Fideos con forma de flor`, 400, 34) 
];

const items = Number(prompt(`Bienvenido, porfavor elija el producto deseado ingresando el nombre en minúscula: \n\n 0 = ${productos[0].pasta} \n 1 = ${productos[1].pasta} \n 2 = ${productos[2].pasta} \n 3 = ${productos[3].pasta} \n 4 = ${productos[4].pasta} \n 5 = ${productos[5].pasta} \n 6 = ${productos[6].pasta}`))
const porciones = Number(prompt("Porfavor elija la cantidad de porciones solicitadas"));

function imagenes() {  //Carga las imagenes
    let img = document.createElement('img');
    img.src = "../imagenes/"+items+".jpeg";
    document.body.appendChild(img); 
}

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
    document.write(`\n\n <div> 
    <h1> Gracias por comprar en Tierra de Pastas </h1> </div> \n\n`)
    imagenes();    
    document.write(` \n\n <div>
    <p> Usted ordenó </p> 
    <b> ${porciones} </b> <p> porciones de: </p> 
    <b> ${productos[items].pasta} </b> 
    <p> Su total es de: </p> 
    <b> $ ${resultadoFinal()} </b> 
    </div>`)    
}
final();



