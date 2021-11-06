import viewHome from "./viewHome.js"

export default class viewFavorite{
    constructor(username,productName){
        this.username = username;
        this.productName = productName;
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

        this.cardBtn = document.querySelector('.cart-btn');

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

            </section>

            <h2>Desktop Pc</h2>
            <section class="main-categorie">

            </section>

            <h2>Leptop / Notebook</h2>
            <section class="main-categorie">

            </section>

            <h2>Televizoare</h2>
            <section class="main-categorie">

            </section>

            <h2>Sisteme Audio</h2>
            <section class="main-categorie">

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

    handleLogOut=()=>{
        let nou = new viewHome();
    }
}