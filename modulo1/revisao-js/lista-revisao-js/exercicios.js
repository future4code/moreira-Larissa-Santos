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
  return array.sort()
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
const retorno = array.filter(pares => (pares %2)== 0);
return retorno;

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumber
let menorNumber 
let diferenca
let maiorDivisivel 

    if (num1 > num2) {
    maiorNumber = num1
    menorNumber = num2
    }
    else{
        maiorNumber = num1
        menorNumber = num2
}
    maiorDivisivel = maiorNumber % menorNumber === 0
    diferenca = maiorNumber - menorNumber
    
 return {maiorNumero: maiorNumber, maiorDivisivelPorMenor: maiorDivisivel, diferenca: diferenca}   

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((item) =>{
    let gastosDosClientes = 0
    item.compras.forEach((comprasClientes) =>{
        gastosDosClientes += comprasClientes
    })
    item.saldoTotal -= gastosDosClientes
    item.compras =[]
})
return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}