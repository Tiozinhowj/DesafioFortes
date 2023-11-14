function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login === "colaborador" && senha === "colaborador") {
        alert('Sucesso');
        location.href = "colaborador.html";
    } else if (login === "fornecedor" && senha === "fornecedor") {
        alert('Sucesso');
        location.href = "fornecedor.html";
    } else if (login === "gerente" && senha === "gerente") {
        alert('Sucesso');
        location.href = "gerente.html";
    } else if (login === "supervisor" && senha === "supervisor") {
        alert('Sucesso');
        location.href = "supervisor.html";
    } else {
        alert('Erro: Combinação de login/senha inválida');
    }
}
