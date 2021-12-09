//Exercícios de interpretação de código.

//1) Imprime o valor 10, pois segue no laço segue a sequência de somar 
//0+1 não ultrapassado 5. E no console.log chama a soma dos resultados
// dessa variável.

//2)
//a)Todos os números maiores que 18 da lista.
//b) Sim, é possível. Tiraria o if (numero > 18).

//3)Uma sequência de asteriscos de 1 ao 4.

//Exercícios de escrita de código

//1.  Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//a) , b) e c)

const quantidadeBichinhos = Number(prompt("Digite a quantidade de bichos de estimação que você tem?"))

if (quantidadeBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    const nomes = []
    for (let b = 0; b < quantidadeBichinhos; b++) {
        const nomeBichinhos = prompt("Digite o(s) nome(s) dele(s) um por um")
        nomes[b] = nomeBichinhos
    }
    console.log(nomes)
}

//2.
const arrayOriginal = [10, 25, 30, 45, 50, 60, 75, 80, 90, 100]

//a)
for (let numero of arrayOriginal) {
    console.log(numero)
}

//b)
for (let numero of arrayOriginal) {
    const numero1 = numero / 10
    console.log(numero1)
}

//c)
function imprimirPares(array) {
    const numberPares = []

    for (let numero of array) {
        if (numero % 2 === 0) {
            numberPares.push(numero)
        }
    }
    console.log(numberPares)
}
imprimirPares(arrayOriginal)

//d) 
const arrayOriginal2 = [05, 15, 25, 35, 45, 50, 60, 70, 80, 85, 90, 95, 100, 105, 115]
function novoNumero(array) {
    const arrayVazia = []
    for (let elemento of array) {
        arrayVazia.push(`O elemento do index ${array.indexOf(elemento)} é: ${elemento}`)
    }
    console.log(arrayVazia)

}
novoNumero(arrayOriginal2)



//e) const arrayOriginal = [10, 25, 30, 45, 50, 60, 75, 80, 90, 100]

let valorMaximo = 9
let valorMinimo = 101

for(let n = 0; n < arrayOriginal.length; n++){
    if(arrayOriginal[n] > valorMaximo)
        valorMaximo = arrayOriginal[n]

    if(arrayOriginal[n] < valorMinimo)
        valorMinimo = arrayOriginal[n];
}

console.log(`O maior valor é: ${valorMaximo}`)
console.log(`O menor valor é: ${valorMinimo}`)

