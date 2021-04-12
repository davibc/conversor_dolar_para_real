function voltaValorConversao() {
    var inputConversao = document.querySelector(".valorConversao")
    console.log(inputConversao)
    var valorConversao = inputConversao.value
    valorConversaoComoNumero = Number(valorConversao)
    console.log(valorConversao)

    converterParaReal()

    document.querySelector("#botaoConversor").disabled = true

    document.querySelector("#resultadoConversao").innerHTML = `R$ ${dolarParaRealFixado}`
}

function converterParaReal() {
    dolarParaReal = valorConversaoComoNumero * 5.69
    dolarParaRealFixado = dolarParaReal.toFixed(2)
    console.log(dolarParaReal)
}