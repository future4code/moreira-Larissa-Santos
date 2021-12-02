//Exercícios de interpretação de código

//1. Leia o código abaixo:
//a) O que vai ser impresso no console?
//Os valores da multiplicação = 10 e 50

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse 
//a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// Daria erro, pois a função não seria reconhecida.

//2. Leia o código abaixo:
//a) Explique o que essa função faz e qual é sua utilidade
// O código retornaria com falso se o usuário escrevesse um texto
//que não houvesse a palavra cenoura e retornaria com verdadeiro se usuário
//escrevesse a frase com a palavra cenoura. É útil para identificar se na frase existe
//a palavra cenoura, seja em letras maísculas ou minúsculas.


//b)Determine qual será a saída no console para cada uma das 
//3 entradas do usuário:
//i.   Eu gosto de cenoura = True
//ii.  CENOURA é bom pra vista = True
//iii. Cenouras crescem na terra = True


//Exercícios de escrita de código

/*1. Escreva as funções explicadas abaixo:
    
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.*/
    
function identificação(){
    console.log("Eu sou Larissa, tenho 24 anos, moro em Barro Preto e sou estudante")
}
identificação()

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), 
//a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
    

function informacoesPessoais(NOME, IDADE, ENDEREÇO, PROFISSÃO) {
    console.log(`Eu sou ${NOME}! tenho ${IDADE} anos ! moro em ${ENDEREÇO} e sou ${PROFISSÃO}`)
}
informacoesPessoais("Larissa", 24, "Barro Preto", "Estudante")


//2. Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somaDoisNumeros(numero1, numero2) {
const soma = numero1 + numero2
return soma 
}

const resultado = somaDoisNumeros(10, 40)
console.log("resultado", resultado)

console.log(resultado)


//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function comparaDoisNumeros(numero1, numero2) {
    const maiorouigual = numero1 >= numero2
    return maiorouigual 
    }
    
    const resultado02 = comparaDoisNumeros(10, 40)
    console.log("resultado01", resultado02)
    
        
//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function numero(numero1) {
    const parOuNao = numero1 % 2 === 0
    return parOuNao 
    }
    const resultado3 = numero(40)
    console.log("resultado02", resultado3)

    
//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function novaMensagem(mensagem) {
    console.log(mensagem.toUpperCase());
    console.log(mensagem.length)
}
console.log(novaMensagem('você foi aprovado')); 

//3.Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

/*Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10*/

function soma(calculo1) {
    const somar = numUsuario01 + numUsuario02
    return somar
}
function subtrair(calculo2) {

    const subtração = numUsuario01 - numUsuario02
    return subtração
}
function dividir(calculo3) {

    const divisao = numUsuario01 / numUsuario02
    return divisao
}
function multiplicar(calculo4) {

    const multiplicacao = numUsuario01  * numUsuario02
    return multiplicacao
}

const numUsuario01 = Number(prompt("Escreva o primeiro número:"))
const numUsuario02 = Number(prompt("Escreva o segundo número:"))
console.log("Números do Usuário:", numUsuario01, "e", numUsuario02)

let contaDeAdicao = soma()
let contaDeSubtracao = subtrair()
let contaDeMultiplicao = multiplicar()
let contaDeDivisao = dividir()

console.log("Soma:", contaDeAdicao)
console.log("Diferença:", contaDeSubtracao)
console.log("Multiplicação:", contaDeMultiplicao)
console.log("Divisão:", contaDeDivisao)


