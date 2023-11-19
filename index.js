function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login === "colaborador" && senha === "colaborador") {
        alert('Sucesso');
        location.href = "./Colaborador/colaborador.html";
    } else if (login === "fornecedor" && senha === "fornecedor") {
        alert('Sucesso');
        location.href = "./Fornecedor/fornecedor.html";
    } else if (login === "gerente" && senha === "gerente") {
        alert('Sucesso');
        location.href = "./Gerente/gerente.html";
    } else if (login === "supervisor" && senha === "supervisor") {
        alert('Sucesso');
        location.href = "./Supervisor/supervisor.html";
    } else {
            Swal.fire({
            title: "Erro",
            text: "Cadastro ou Senha Errados",
            icon: "error"
          });}
    }