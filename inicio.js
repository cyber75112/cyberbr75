function loginUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aqui você faria uma requisição ao seu back-end para autenticar as credenciais
    // Por exemplo, com XMLHttpRequest, fetch API, ou qualquer biblioteca de requisições HTTP
    
    // Simulação de autenticação (substitua isso pela lógica real)
    if (username === 'sagaz15' && password === '123') {
        // Login bem-sucedido
        window.location.href = 'dashboard.html'; // Redireciona para a página de dashboard
        return false; // Evita o envio do formulário
    } else {
        // Exibe mensagem de erro
        document.getElementById('error-msg').innerText = 'Credenciais inválidas. Por favor, tente novamente.';
        return false; // Evita o envio do formulário
    }
}