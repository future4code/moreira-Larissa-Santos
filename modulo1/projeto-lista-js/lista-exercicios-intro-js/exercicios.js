// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite a altura!'))
  const largura = Number(prompt('Digite a largura!'))
  const areaDoRetangulo = altura * largura
  console.log(areaDoRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano Atua!'))
  const anoDeNascimento = Number(prompt('Digite o seu ano de Nascimento!'))
  const idadeDoUsuario = anoAtual - anoDeNascimento
  console.log(idadeDoUsuario)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imcDoUsuario = peso / (altura * altura)
  return imcDoUsuario
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome!')
  const idade = Number(prompt('Qual sua idade?'))
  const email = prompt('Qual seu email?')
  console.log("Meu nome é " + nome+ ", tenho " + idade + " anos, e o meu email é " + email + ".")

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite uma cor')
  const cor2 = prompt('Digite uma segunda cor')
  const cor3 = prompt('Digite uma terceira cor')
  let coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const letraMaiuscula = string.toUpperCase()
  return letraMaiuscula
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIngressos = custo /valorIngresso
  return quantidadeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const stringsIguais = string1.length == string2.length
  return stringsIguais


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0]
return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length-1]
  return ultimoElemento
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 //const a = array[0] 
 //const b = array[array.length-1]
 const c = array[0] 
 array[0] = array[array.length-1]
 array[array.length-1] = c
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const stringsIguais = (string1.toUpperCase() === string2.toUpperCase())
  return stringsIguais


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Qual o ano atual?"))
  anoDeNascimento= Number(prompt("Qual o ano do seu nascimento?"))
  anoCarteiraIdentidade = Number(prompt("Qual o ano de emisão de sua carteira de identidade?"))
  let ano = anoAtual ===
  console.log()
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
let bissextosUm = ano % 400 === 0
let bissextosDois = ano % 4 === 0
let bissextoExceto = ano % 100 === 0 && ano % 400 !== 0
let ehBissexto = bissextosUm && (bissextosDois && !bissextoExceto)
return ehBissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  idadeMaior = Number(prompt("Você tem mais de 18 anos?"))
  ensinoMedio = prompt("Você possui ensino médio completo?")
  anoAtual = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  const idadeMaior 


}