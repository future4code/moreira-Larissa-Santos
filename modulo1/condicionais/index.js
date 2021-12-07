//Exercícios de interpretação de código

/*01. a) Explique o que o código faz. Qual o teste que ele realiza?

O código pede ao usuário um número qualquer e avalia se esse número é 
 divisível por 2.

b) Para que tipos de números ele imprime no console "Passou no teste"?

 Para números divisíveis por 2.

c) Para que tipos de números a mensagem é "Não passou no teste"?

Para números não divisíveis  por 2. */

//2.O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

/*a) Para que serve o código acima?

Para informar os valores das frutas especificas solicitadas.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

O preço da fruta maçã é R$ 2,25.

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
 
O preço da fruta Pêra é R$ 5,00. */

/*3. Leia o código abaixo:

a) O que a primeira linha está fazendo?

Pedindo um número ao usuário.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

Esse número passou no teste. ( Se fosse número 10)
E se foss número 10 daria erro na código.

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

*/

// Exercícios de escrita de código

//01. a) 
const idadeUsuário = prompt("Digite sua idade:")
const maiorDeIdade = Number(idadeUsuário)
if (maiorDeIdade >= 18) {
  console.log("Você pode dirigir.")
} else {
  console.log("Voce não pode dirigir.")
}

//2. 
const turnoEstudante = prompt(" Digite a letra de acordo com o turno voce estuda:  M (matutino), V (vespertino)  ou N (Noturno):")

 if (turnoEstudante === "M"){ 
  console.log("Bom dia!")
} else if (turnoEstudante === "V"){
  console.log("Boa tarde!")
} else if (turnoEstudante === "N") {
  console.log("Boa noite!")
}

//3.

let turnoDoEstudante = prompt(" Digite a letra de acordo com o turno voce estuda:  M (matutino), V (vespertino)  ou N (Noturno):") 
switch (turnoDoEstudante) {
case "M":
  console.log("Bom dia!")
  break
case "V":
  console.log("Boa tarde!")
  break
 case "N":
  console.log("Boa noite!")
}

4. 
const filmeGenero = prompt("Qual gênero de filme vamos assitir?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

let gênero = "fantasia"
let abaixoDe15 = valorIngresso < 15

if (filmeGenero === gênero && abaixoDe15){ 
  console.log("Bom filme!")
} else  {
  console.log("Escolha outro filme :(")
}
