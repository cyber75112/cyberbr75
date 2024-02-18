document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Impede o envio do formulário

    // Verifique as credenciais (aqui, apenas para fins de exemplo, a senha é "senha123")
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (password === "senha123") {
        // Se a senha estiver correta, redirecione para outra página
        window.location.href = "cyber.br.html";
    } else {
        // Caso contrário, exiba uma mensagem de erro (aqui, apenas para fins de exemplo)
        alert("Credenciais inválidas. Tente novamente.");
    }
});