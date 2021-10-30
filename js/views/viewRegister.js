

export default class viewRegister{
    constructor(){

        this.body = document.querySelector('body');

        this.header();

        this.registerBtn = document.querySelector('.register-btn');
        this.LoginBtn = document.querySelector('.login-btn');
    }


    header=()=>{
        this.body.innerHTML = '';

        this.body.innerHTML =
        `
        <section class="register-header">
            <h1>ONLINE SHOP</h1>
        </section>
        <section class="register-main">
            <h2>Inregistrare</h2>
            <section class="register-container">
                <p>Nume:</p>
                <input type="text">
                <p>Email:</p>
                <input type="text">
                <p>Parola:</p>
                <input type="password">
                <p>Adresa:</p>
                <input type="text">
                <p>Telefon:</p>
                <input type="tel">
                <a href="#" class="register-btn">Inregistrare</a>
                <a href="#" class="login-btn">Conecteaza-te</a>
            </section>
        </section>
        `
    }
}