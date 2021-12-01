/*Exercícios de interpretação de código
1.
a- false
b- false
c- true
d- boolean*/

/* 2. Sim tem um problema no código, falta a palavra Number. O correto seria o código abaixo:  
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

 /**Exercícios de escrita de código**
  * 
    1. Faça um programa que:
        a) Pergunte a idade do usuário
        b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
        c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
        d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)*/
        
        const idadeUsuário = Number(prompt("Qual a sua idade?"))
        const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)"))
    
        let idade = idadeUsuário >= idadeAmigo
        let diferença = idadeUsuário - idadeAmigo

        console.log("Sua idade é maior do que a do seu melhor amigo?" , idade )
        console.log("Qual a diferença de idade entre vocês?", diferença )

        /*2. Faça um programa que:
        a) Peça ao usuário que insira um número **par**
        b) Imprima na console **o resto da divisão** desse número por 2.
        c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
        d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código.*/
    
        const numeroPar = Number(prompt("Insira um número par"))
        let resultado = 0
        let divisão  = numeroPar % 2
        console.log("Resultado Resto:", divisão)

     //Observei que o resultado sempre da 0.
    // O resto daria sempre 1 se usuário inserir um número ímpar.

    /*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console.
    a) A idade do usuário em meses
    b) A idade do usuário em dias
    c) A idade do usuário em horas*/
        
    const idadeAnos = Number(prompt("Qual a sua idade em anos?"))
    const idadeEmMeses = idadeAnos * 12
    const idadeEmDias = idadeEmMeses* 30
    const idadeEmHoras = idadeEmDias * 12

    console.log("Resultado em meses:", idadeEmMeses )
    console.log("Resultado em anos:", idadeEmDias )
    console.log("Resultado em horas:", idadeEmHoras )

    /*4.Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true*/

    const num1 = Number(prompt("Escreva um número"))
    const num2 = Number(prompt("Escreva um número?"))

    console.log("O primeiro número é maior que o segundo?", num1 > num2)
    console.log("O primeiro número é igual ao segundo?", num1 === num2)
    console.log("O primeiro número é divisível pelo segundo?", num1 % num2 === 0)
    console.log("O segundo número é divisível pelo o primeiro?", num2 % num1 === 0)
