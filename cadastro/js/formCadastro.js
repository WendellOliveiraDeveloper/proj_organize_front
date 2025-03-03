let btnCadastrar = document.querySelector("#botao_cadastrar");

btnCadastrar.addEventListener("click", function() {
    event.preventDefault();

    let formCadastrar = document.querySelector("#form_cadastrar");
    console.log(formCadastrar.campo_email_cadastro.value);
    console.log(formCadastrar.campo_senha_cadastro.value);
})