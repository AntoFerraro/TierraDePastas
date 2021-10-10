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

