import viewHome from "./viewHome.js";

export default class viewLogin{
    constructor(){

        this.body = document.querySelector('body');

        this.header();

        this.loginBtn = document.querySelector('.login-btn');
        this.loginBtn.addEventListener('click', this.handleLogin);

        this.homeBtn = document.querySelector('.home-btn');
        this.homeBtn.addEventListener('click',this.handleHome);
    }

    header=()=>{
        this.body.innerHTML = '';

        this.body.innerHTML = 
        `
        <section class="register-header">
        <h1>ONLINE SHOP</h1>
        </section>
        <section class="register-main">
            <h2>Conecteaza-te</h2>
            <section class="register-container">
                <p>Email:</p>
                <input type="text">
                <p>Parola:</p>
                <input type="password">
                <a href="#" class="login-btn">Conecteaza-te</a>
                <a href="#" class="home-btn">Home</a>
            </section>
        </section>
        `;
    }
    handleLogin=()=>{

    }

    handleHome=()=>{
        let nou = new viewHome();
    }
}