// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02

function retornaArrayInvertido(array) {
    return array.slice(0).reverse()
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
    const retorno = array.filter(pares => (pares % 2) == 0);
    return retorno;
}

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
    return Math.pow(array, 2)
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    return Math.max.apply(Math, array);
}

// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumber
    let menorNumber
    let diferenca
    let maiorDivisivel
    // 3
    // 7
    if (num1 > num2) {
        maiorNumber = num1
        menorNumber = num2
    }
    else {
        maiorNumber = num2
        menorNumber = num1
    }
    maiorDivisivel = maiorNumber % menorNumber === 0
    diferenca = maiorNumber - menorNumber

    return { maiorNumero: maiorNumber, maiorDivisivelPorMenor: maiorDivisivel, diferenca: diferenca }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = retornaArrayOrdenado(array)
    let maior = arrayOrdenado[array.length -2]
    let menor = arrayOrdenado[1]
    return [maior, menor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    novaPessoa = { ...pessoa, nome: "ANÔNIMO" }

    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((item) => {
        let gastosDosClientes = 0
        item.compras.forEach((comprasClientes) => {
            gastosDosClientes += comprasClientes
        })
        item.saldoTotal -= gastosDosClientes
        item.compras = []
    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    [
        { nome: "João", dataDaConsulta: "01/10/2021" },
        { nome: "Pedro", dataDaConsulta: "02/07/2021" },
        { nome: "Paula", dataDaConsulta: "03/11/2021" },
        { nome: "Márcia", dataDaConsulta: "04/05/2021" }
    ]



}

// EXERCÍCIO 15B

function retornaArrayOrdenadoPorData(consultas) {

}