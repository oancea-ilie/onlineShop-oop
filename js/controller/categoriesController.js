import Categories from "../model/categories.js";

export default class CategoriesController{
    constructor(){
        this.arr =JSON.parse(localStorage.getItem("categories"));
        this.list=[];
        this.toObject();
    }

    toObject=()=>{
        this.arr.forEach(e => {
            this.list.push(new Categories(e.id,e.name,e.description,e.image));
        });
    }

    reload=()=>{
        localStorage.setItem('categories',JSON.stringify(this.list));
    }

    create=(categories)=>{
        this.list.push(categories);

        this.reload();
    }

    delete=(id)=>{
        this.list = this.list.filter(e=>e.id!==id);

        this.reload();
    }

    getItemById=(id)=>{
        for(let i of this.list){
            if(i.id == id){
                return i;
            }
        }
    }

    updateName=(id,newName)=>{
    
        let obj = this.getItemById(id);

        obj.name = newName;

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

    

}