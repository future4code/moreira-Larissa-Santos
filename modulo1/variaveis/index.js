/* Exercicio 1: Será impresso no console b=10 e depois a=10,b=5"*/
/* Exercicio 2: Será impresso no console c=10, b=10, a= 10 e depois a=10,b=10,c=10"*/
/* Exercicio 3: let horasTrabalhadas,let valorDiário*/


let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
/* Foi impresso undefined que representa a falta de valor de uma variável*/

nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")
console.log("Olá", nome, ", você tem", idade, "anos.")


let coloriuCabelo = prompt("Já coloriu seu cabelo?")
let mudarCor = prompt("Gostaria de mudar a cor?")
let tonsClaros = prompt("Prefere tons claros?")
console.log("Já coloriu seu cabelo?", coloriuCabelo)
console.log("Gostaria de mudar a cor?", mudarCor)
console.log("Prefere tons claros?", tonsClaros )

let a = 10
let b = 25
let c = a

a = b
b = c

console.log("O novo valor de b é", b)
console.log("O novo valor de a é", a)