//1er Desafio 
const fs = require("fs")

class ProductManager {
    static id= 0;
    

    constructor(path){
        this.products = []
        this.path = path; 

    }
    
   
    
    async addProduct({title, description,price,img,code,stock, category, thumbnails}){
        try {
            const arrayProductos = await this.leerArchivo();
      
    if (!title || !description || !price || !img ||!code  ||!stock || !category) {
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
        stock, 
        category,
        status: true, 
        thumbnails: thumbnails || []
    }
    if (arrayProductos.length > 0) {
        ProductManager.ultId = arrayProductos.reduce((maxId, product) => Math.max(maxId, product.id), 0);
      }

      newProduct.id = ++ProductManager.ultId; 

      arrayProductos.push(newProduct);
      await this.guardarArchivo(arrayProductos);
    } catch (error) {
      console.log("Error al agregar producto", error);
      throw error; 
    }
    }
    
    async getProducts(){
       try {
        await this.leerArchivo()
        return 

       } catch (error) {
        console.log("Se produkp un error al traer el archivo", errror);        
       }

    }
    
    async getProductById(id){
     try {
        const arrayProductos = await this.leerArchivo()
        const buscado =  arrayProductos.find(item => item.id === id) 
        if (buscado) {
            return buscado 
        } else {
            console.log("No se encontro el producto con el id, segui intentando");
        }  

     } catch (error) {
        console.log("hubo un error en traer el id ", error );
     }
    }
    //metodos desafio 2 


    async leerArchivo(){
        try {
            const respuesta = await fs.promises.readFile(this.path, "utf-8");
            const arrayProductos = JSON.parse(respuesta);
            return arrayProductos   

        } catch (error) {
            console.log("error al leer al archivo", error);
        }

    }
    async guardarArchivo (arrayProductos){
        try {
            await fs.writeFile(this.path, JSON.stringify(arrayProductos, null, 2))
        } catch (error) {
            console.log("Hubo un error al guardar", error );
        }

    }

    async deleteProduct (deleteID){
        try {
            productos = productos.filter(producto => producto.id !== deleteID);
            await guardarArchivo(productos) 

        } catch (error) {
            console.log("No se pudo borrar el archivo", error);
        }

    }


    async updateProduct (id, updateBody, newValue){
        try {
            leerArchivo(this.path)
    const filterId = this.products.findIndex(producto => producto.id === id);

     if (indexToUpdate !== -1) {
      products[id][updateBody] = newValue;

      await fs.writeFile(this.path, JSON.stringify(products, null, 2));

      console.log('El producto se actuzalizo correctamente');
    } else {
      console.log('Error al actualizar el producto');
    }
        } catch (error) {
            console.log("no se pudo actualizar el producto seleccionado", error );
        }
    }


    }



const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct("VideJuego", "Bettlefield 1 tiene las mejores batallas", 5000, "Made in Microsoft", "xbox", 25, "videoJuego", 5000)

console.log(manager.getProducts());


manager.addProduct("VideoJuego", "starfield y skirym son juegos hermosos", 1500, "Made in Microsoft", "Xbox", 25, "VideoJuego",  2500)

console.log(manager.getProducts(2));

console.log("checamos si jala");
manager.getProductById(20)























