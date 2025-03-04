let btnLogin = document.querySelector("#botao_entrar")

btnLogin.addEventListener("click", function() {
    event.preventDefault();

    let formLogar = document.querySelector("#form_logar");
    console.log(formLogar.campo_email_login.value);
    console.log(formLogar.campo_senha_login.value);
})