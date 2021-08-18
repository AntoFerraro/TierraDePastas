
const productos = ["Ravioles con forma de corazon rellenos con Capresse", "Cappelacci rellenos de hongos", "Moñitos rellenos de remolacha", "Pansotti rellenos de calabaza", "Ravioles rellenos de queso de cabra y zanahora caramelizada", "Sobrecitos rellenos de ricota y verdura", "fideos con forma de flor"];
const costos = [450, 500, 450, 500, 550, 500, 400]


const items = prompt(`Bienvenido, porfavor elija el producto deseado ingresando el numero al lado del mismo: \n\n0. Corazon Con Capresse = ${productos[0]} \n1. Cappelacci con Hongos = ${productos[1]} \n2. Moñitos con remolacha = ${productos[2]} \n3. Pansotti con calabaza = ${productos[3]} \n4. Ravioles con queso de cabra = ${productos[4]} \n5. Sobrecitos con ricota y verdura = ${productos[5]} \n6. Fideos con forma de flor = ${productos[6]}`)

function imagenes() {
    let img = document.createElement('img')
    img.src = "../imagenes/"+Number(items)+".jpeg"
    document.body.appendChild(img); 
}


let stock = 200
let porciones = prompt("Porfavor elija la cantidad de porciones solicitadas");

function totalCompra(){
    if (Number(porciones) <= 200 && Number(porciones) >= 1){
        const resultadoCompra = costos[Number(items)] * Number(porciones);
        return resultadoCompra;
    } else {
        alert("Disculpe, no tenemos stock para lo que solicitó")
    }
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
    imagenes();
    document.write(` Su compra es: ${productos[Number(items)]}, Su total es de: ${resultadoFinal()} `)
}
final();













