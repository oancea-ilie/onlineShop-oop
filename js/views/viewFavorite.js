import viewHome from "./viewHome.js"
import ProductsController from "../controller/productsController.js";

export default class viewFavorite{
    constructor(username,productName){
        this.username = username;
        this.productName = productName;
        this.body = document.querySelector('body');

        this.header();
        this.main();

        //header
        this.toggleBtn = document.querySelector('.toggle-btn');
        this.bars = document.querySelector('.fa-bars');
        this.toggleSection = document.querySelector(".toggle-section");
        this.onOf = 0;
        this.brand = document.querySelector('.brand');
        this.searchBtn = document.querySelector('.search-btn');
        this.searchInput = document.querySelector('.search-input');
        this.userBtn = document.querySelector('.user-btn');
        this.logOutBtn = document.querySelector('.logout-btn');
        this.logOutBtn.addEventListener('click',this.handleLogOut);
        this.toggleBtn.addEventListener("click",this.handleToggleBtn);
        this.cardBtn = document.querySelector('.cart-btn');

        //main

        this.container = document.querySelector('main'); 
        this.productController = new ProductsController();
        this.setProducts();
    }

    header=()=>{
        this.body.innerHTML = '';

        this.body.innerHTML += 
        `
        <header> 
            <section class="first-header">
                <section class="first-header-left">
                    <a href="#" class="toggle-btn"><i class="fas fa-bars"></i></i></a>
                    <a href="#" class="brand">ONLINE SHOP</a>
                </section>
                <section class="first-header-right">
                    <a href="#" class="favorite-btn"><i class="fas fa-heart" style="color:#c09f80;"></i></a>
                    <span class="notificare"></span>
                    <a href="#" class="cart-btn"><i class="fas fa-shopping-cart"></i></a>
                    <a href="#" class="register-btn" style="display: none;"><i class="fas fa-user-plus"></i></a>
                    <a href="#" class="user-btn"><i class="fas fa-user-tie"></i></a>
                    <a href="#" class="logout-btn"><i class="fas fa-sign-out-alt"></i></a>
                </section>
            </section>
            <section class="last-header">
                <input type="text" class="search-input">
                <a href="#" class="search-btn"><i class="fas fa-search"></i></a>
            </section>
        </header>
        `
    }

    main=()=>{
        this.body.innerHTML+= 
        `
        <main>
            <section class="main-container-categorii">
            
            </section>
        </main>
        `
    }

    setProducts=()=>{
        console.log(this.productController.list);
        this.productController.list.forEach(e=>{
            if(e.favariteStatus == 1){
                console.log('e');
                this.toCard(e);
            }
        });
    }

    toCard=(product)=>{
        this.container.innerHTML +=
        `
        <section class="main-card-categorie card-${product.category}">
            <img src="${product.image}" alt="">
            <i class="fas fa-heart"></i>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <h3 class="pret-produs">${product.price} Lei</h3>
        </section>
        `;
    }

    handleToggleBtn=()=>{
        if(this.onOf ==0){
            this.toggleSection.style.transform = 'translateX(0%)';
            this.onOf = 1;
            this.bars.classList.remove('fa-bars');
            this.bars.classList.add('fa-times');
        }else{
            this.toggleSection.style.transform = 'translateX(-100%)';
            this.onOf = 0;
            this.bars.classList.remove('fa-times');
            this.bars.classList.add('fa-bars');
        }
        
    }

    handleLogOut=()=>{
        let nou = new viewHome();
    }

}