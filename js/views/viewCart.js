import viewHome from "./viewHome.js"
import ProductsController from "../controller/productsController.js";
import viewUserInterface from "./viewUserInterface.js";
import viewProduct from "./viewProduct.js";
import viewFavorite from "./viewFavorite.js";


export default class viewCart{
    constructor(username){
        this.username = username;
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
        this.brand.addEventListener('click',this.handleBrand);
        this.cardBtn = document.querySelector('.cart-btn');

        this.favoriteBtn = document.querySelector('.favorite-btn');
        this.favoriteBtn.addEventListener('click',this.handleBigFavorite);

        //main
        this.cosGolText = document.querySelector('.cos-gol-text');
        this.cosGolImg = document.querySelector('.cos-gol-img');

        this.container = document.querySelector('.cart-container'); 
        this.productController = new ProductsController();
        this.getAllProducts();
        // this.allProducts = document.querySelectorAll('.favorite-product');
        // this.handleAllProducts();
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
                    <a href="#" class="favorite-btn"><i class="far fa-heart"></i></a>
                    <span class="notificare"></span>
                    <a href="#" class="cart-btn"><i class="fas fa-shopping-cart" style="color: #c09f80;"></i></a>
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
        this.body.innerHTML +=
        `
        <main>

        <section class="toggle-section">
            <section class="toggle-section-flex categorie-telefon">
                <img src="svg/phone.svg" alt="">
                <p>Telefoane Mobile</p>
            </section>

            <section class="toggle-section-flex categorie-pc" >
                <img src="svg/pc.svg" alt="">
                <p>Desktop Pc</p>
            </section>

            <section class="toggle-section-flex categorie-leptop">
                <img src="svg/laptop.svg" alt="">
                <p>Leptop / Notebook</p>
            </section>

            <section class="toggle-section-flex categorie-tv">
                <img src="svg/tv.svg" alt="">
                <p>Televizoare</p>
            </section>
            <section class="toggle-section-flex categorie-audio" >
                <img src="svg/audio.svg" alt="">
                <p>Sisteme Audio</p>
            </section>
        </section>

            <section class="cart-container">
                <img src="svg/sad.svg" class="cos-gol-img">
                <p class="cos-gol-text">Ups,cardul este gol!</p>

            </section>

        </main>
        `
    }

    getAllProducts=()=>{
        let i = 0;
        
        this.productController.list.forEach(e=>{
            if(e.cartStatus ==1){
                this.setProduct(e);
                i=1;
            }
        });


        if(i ==1){
            this.cosGolImg.style.display = 'none';
            this.cosGolText.style.display = 'none';

            this.setCartSumar();

        }else{
            this.cosGolImg.style.display = 'block';
            this.cosGolText.style.display = 'block';
        }
    }

    setProduct=(obj)=>{
        this.container.innerHTML +=
        `
        <section class="cart-product card-pc">
            <i class="fas fa-times close-produs-cart"></i>
            <img src="${obj.image}" alt="">
            <p class="descriere-produs-cart">${obj.name}</p>
            <select class="cantitate-produs-cart">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <h3 class="pret-produs-cart">${obj.price} Lei</h3>
        </section>
        `

    }

    setCartSumar=(obj)=>{
        this.container.innerHTML +=
        `
        <section class="cart-sumar">
            <p>Cost produse: <span>${obj.price}</span> lei</p>
            <p>Cost livrare: <span>15</span> lei</p>
            <p>Total: 4015 lei</p>
            <a href="#">Trimite comanda <i class="fas fa-angle-double-right"></i></a>
        </section>
        `
    }

    handleBrand=()=>{
        let nou = new viewUserInterface(this.username);
    }

    // handleAllProducts=()=>{
    //     this.allProducts.forEach(e=>{
    //         e.addEventListener('click',()=>{
    //             let productName = e.children[2].textContent;
    //             let product = this.productController.getProductByName(productName);

    //             let nou = new viewProduct(product,this.username);
    //         })

    //     });
    // }
    
    handleBigFavorite=()=>{
        let nou = new viewFavorite(this.username);
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