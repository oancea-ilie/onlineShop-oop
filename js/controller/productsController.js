import Product from "../model/product.js"

export default class ProductsController{
    constructor(){
        this.arr =JSON.parse(localStorage.getItem("products"));
        this.list=[];
        this.toProducts();
    }

    toProducts=()=>{

        this.arr.forEach(e => {

            this.list.push(new Product(e.id,e.name,e.price,e.description,e.image,e.category,e.create_date,e.stock));
            
        });

    }

    reload=()=>{
        localStorage.setItem('products',JSON.stringify(this.list));
    }

    create=(product)=>{

        this.list.push(product);

        this.reload();
    }

    delete=(id)=>{
        this.list = this.list.filter(e=>e.id!==id);

        this.reload();
    }

    getItemById=(id)=>{
        for(let i of this.list){
            if(i.id ==id){
                return i;
            }
        }
    }

    updateName=(id,newName)=>{
    
        let obj = this.getItemById(id);

        obj.name = newName;

        this.reload();
    }

    updatePrice=(id,newPrice)=>{
    
        let obj = this.getItemById(id);

        obj.price = newPrice;

        this.reload();
    }

    updateDescription=(id,newDescription)=>{
    
        let obj = this.getItemById(id);

        obj.description = newDescription;

        this.reload();
    }
    
    updateImage=(id,newImage)=>{
    
        let obj = this.getItemById(id);

        obj.image = newImage;

        this.reload();
    }

    updateCategory=(id,newCategory)=>{
    
        let obj = this.getItemById(id);

        obj.category = newCategory;

        this.reload();
    }

    updateCreateDate=(id,newCreateDate)=>{
    
        let obj = this.getItemById(id);

        obj.create_date = newCreateDate;

        this.reload();
    }

    updateStock=(id ,newStock)=>{
    
        let obj = this.getItemById(id);

        obj.stock = newStock;

        this.reload();

    }

   
}