//1er Desafio 


class ProductManager {
    static id= 0
    constructor(){
        this.products = []
    
    }
    
   
    
    addProduct(title, description,price,img,code,stock){
    if (!title || !description || !price || !img ||!code  ||!stock) {
        console.log("Se necesitan todos los campos llenos");
        return; 
    }
    
    if (this.products.some(item=> item.code === code)) {
       console
       .log("El codigo es igual y se repite"); 
       return;
    }

    const newProduct ={
        id: ++ProductManager.id,
        title,
        description,
        price,
        img,
        code,
        stock
    }

    this.products.push(newProduct);

    }
    
    getProducts(){
        return this.products
    }
    
    getProductById(id){
        const product = this.products.find(item => item.id === id )
        
        if (!product) {
            console.error("¡¡¡¡Naut FAAAAUUUUUNT!!!!!!!!");
        } else {
            console.log(product);
        }
    }
    
  
    
    }



const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct("producto prueba", "esto es un producto prueba", 500, "sin imagen", "abc123", 25)

console.log(manager.getProducts());


manager.addProduct("VideoJuego", "starfield y skirym son juegos hermosos", 1500, "Made in Microsoft", "Xbox", 2500)

console.log(manager.getProducts(2));

console.log("checamos si jala");
manager.getProductById(20)



