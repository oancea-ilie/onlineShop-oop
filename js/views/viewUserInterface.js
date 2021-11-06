import viewHome from "./viewHome.js"
import viewFavorite from "./viewFavorite.js"
import viewCard from "./viewCard.js"

export default class viewUserInterface{
    constructor(username){
        this.username = username;
        this.body = document.querySelector('body');
        this.header();
        this.main();
        this.toggleBtn = document.querySelector('.toggle-btn');
        this.bars = document.querySelector('.fa-bars');
        this.toggleSection = document.querySelector(".toggle-section");
        this.onOf = 0;
        this.brand = document.querySelector('.brand');
        this.searchBtn = document.querySelector('.search-btn');
        this.searchInput = document.querySelector('.search-input');
        this.categorii = document.querySelector('.main-container-categorii');

        this.userBtn = document.querySelector('.user-btn');
        this.logOutBtn = document.querySelector('.logout-btn');
        this.logOutBtn.addEventListener('click',this.handleLogOut);

        this.setCategories();
        this.toggleBtn.addEventListener("click",this.handleToggleBtn);


        this.favoriteBtn = document.querySelector('.favorite-btn');
        this.favoriteBtn.addEventListener('click',this.handleBigFavorite);
        
        this.cardBtn = document.querySelector('.cart-btn');

        this.favorite = document.querySelectorAll('.main-card-categorie i');
        this.handleFavorite();
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
            <section class="main-img-container">
                <img src="img/cupon.jpg" alt="">
                <h2>Inregistreaza-te acum si primesti un voucher in valoare de <span>20 de lei!</span></h2>
            </section>

            <section class="main-avantaje">
                <h2>Avantaje</h2>
                <section class="main-avantaje-card">
                    <i class="fas fa-hand-holding-usd"></i>
                    <p>Economisesti bani</p>
                </section>

                <section class="main-avantaje-card">
                    <i class="fas fa-shield-alt"></i>
                    <p>Garantie extinsa</p>
                </section>
                <section class="main-avantaje-card">
                    <i class="fas fa-truck"></i>
                    <p>Transport gratuit</p>
                </section>
            </section>

            <section class="main-container-categorii">
            
            </section>
        </main>
        `
    }

    setCategories=()=>{
        this.categorii.innerHTML = '';
        this.categorii.innerHTML +=
        `
            <h2>Telefoane Mobile</h2>
            <section class="main-categorie">
                <section class="main-card-categorie">
                    <img src="img/telefon.jpg" alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">1.000 Lei</h3>
                </section>

                <section class="main-card-categorie">
                    <img src="img/telefon.jpg" alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">1.000 Lei</h3>
                </section>
            </section>

            <h2>Desktop Pc</h2>
            <section class="main-categorie">
                <section class="main-card-categorie">
                    <img src="img/desktop.jpg"  alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">2.000 Lei</h3>
                </section>

                <section class="main-card-categorie">
                    <img src="img/desktop.jpg" alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">2.000 Lei</h3>
                </section>
            </section>

            <h2>Leptop / Notebook</h2>
            <section class="main-categorie">
                <section class="main-card-categorie">
                    <img src="img/leptop.jpg"  alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">3.000 Lei</h3>
                </section>

                <section class="main-card-categorie">
                    <img src="img/leptop.jpg" alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">3.000 Lei</h3>
                </section>
            </section>

            <h2>Televizoare</h2>
            <section class="main-categorie">
                <section class="main-card-categorie">
                    <img src="img/televizor.jpg"  alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">4.000 Lei</h3>
                </section>

                <section class="main-card-categorie">
                    <img src="img/televizor.jpg"  alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">4.000 Lei</h3>
                </section>
            </section>

            <h2>Sisteme Audio</h2>
            <section class="main-categorie">
                <section class="main-card-categorie">
                    <img src="img/boxe.jpg" alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">500 Lei</h3>
                </section>

                <section class="main-card-categorie">
                    <img src="img/boxe.jpg" alt="">
                    <i class="far fa-heart"></i>
                    <h2>Telefon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h3 class="pret-produs">500 Lei</h3>
                </section>
            </section>
        `
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

    handleBigFavorite=()=>{

        let nou = new viewFavorite(this.username);
    }

    handleFavorite=()=>{
        this.favorite.forEach((e)=>{
            e.addEventListener('mouseover',()=>{
                e.classList.remove('far');
                e.classList.remove('fa-heart');
        
                e.classList.add('fas');
                e.classList.add('fa-heart');
            });
        
            e.addEventListener('mouseout',()=>{
                e.classList.remove('fas');
                e.classList.remove('fa-heart');
        
                e.classList.add('far');
                e.classList.add('fa-heart');
            });

            
            e.addEventListener('click',()=>{
                let productName = e.parentNode.children[2].textContent;

                let nou = new viewFavorite(this.username, productName);
            });
        })
    }

    handleLogOut=()=>{
        let nou = new viewHome();
    }

}