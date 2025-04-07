function tempoPassado(data) {
    const agora = new Date();
    const diferenca = agora - data;

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

const data = new Date(2025, 0, 31, 20, 45, 0);
console.log(tempoPassado(data));

function atualizarTempo() {
    document.getElementById("tempo").textContent = tempoPassado(data);
}

setInterval(atualizarTempo, 1000);

atualizarTempo();