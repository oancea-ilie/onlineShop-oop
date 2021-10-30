
export default class viewLogin{
    constructor(){

        this.body = document.querySelector('body');

        this.header();
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
                <a href="#" class="login-btn">Inregistreaza-te</a>
            </section>
        </section>
        `;
    }
}