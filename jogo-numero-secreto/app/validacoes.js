function  verificaValorChuteValido(chute) {
    const numero =+ chute;

    if (verificaSeChuteNumero(numero)) {
        elementoChute.innerHTML = `
        <div>Você disse <span class="box">${chute}</span></div>
        <div>Valor inválido: isso nem é número!</div>
        `
        return
    }

    if (numeroMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML = `
        <div>Você disse <span class="box">${chute}</span></div>
        <div>Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2> <h3>O número secreto era <span class="box"> ${numero} </span></h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar de novo</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`

    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function verificaSeChuteNumero(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})