function calculaIMC(peso, altura) {
    let alturaMetros = altura / 100
    let resultadoIMC = peso / (alturaMetros * alturaMetros)
    return resultadoIMC
}

function resultado(imc) {
    if (imc < 18.5) {
    return '<strong>Abaixo do peso.</strong><br>Você precisa ganhar massa! \u{1F35B}'
    } else if (imc >= 18.5 && imc <= 29.99) {
        return '<strong>Parabéns, peso normal.</strong><br>Continue assim! \u{1F4AA}'
    } else if (imc >=30 && imc <= 34.99) {
        return '<strong>Acima do peso.</strong><br>Diminua os doces e pratique exercícios físicos! \u{1F3C3}'
    } else {
        return '<strong>Muito acima do peso.</strong><br>Você precisa de ajuda médica! 👩‍⚕️'
    }
}

let resultadoIMC = calculaIMC ()
let feedback = resultado(resultadoIMC)

let peso = document.querySelector('input#peso')
let altura = document.querySelector('input#altura')

let resIMC = document.querySelector('div#resultado')

let calculadora = document.querySelector('div#calculadora')
calculadora.addEventListener('input', function manipulaInput(event) {
    
    if (peso.value !="" && altura.value > 10) { // o value é ama string vazia, pois ela vazia é FALSE. podemos deixar assim: if (peso.value && altura.value )
        let imc = calculaIMC(peso.value, altura.value)
        let feedback = resultado(imc)
        resIMC.innerHTML = `<strong><center><span style="font-size:60px">${imc.toFixed(1)}</span></strong><br> ${feedback}</center>`
    }
})