function closePrivacyNotification() {
    var privacyNotification = document.getElementById('privacy-notification');
    privacyNotification.style.display = 'none';
}
// Definindo uma função para gerar cores RGB aleatórias
function getRandomColor() {
    var r = Math.floor(Math.random() * 256); // Valor aleatório entre 0 e 255 para o vermelho
    var g = Math.floor(Math.random() * 256); // Valor aleatório entre 0 e 255 para o verde
    var b = Math.floor(Math.random() * 256); // Valor aleatório entre 0 e 255 para o azul
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// Definindo uma função para alterar a cor de fundo do cabeçalho em intervalos regulares
function changeHeaderColor() {
    var header = document.getElementById('header');
    header.style.backgroundColor = getRandomColor();
}

// Chamando a função changeHeaderColor a cada 2 segundos
setInterval(changeHeaderColor, 2000);

