//Exercícios de interpretação de código

//1.a) O que vai ser impresso no console?
// O nome,o apelido e o indíce.

//2.a) O que vai ser impresso no console?
// O nome, o apelido e o indíce.

//3.c) O que vai ser impresso no console?
// O nome, o apelido e o indíce, exceto o da Leticia Chijo.

//Exercícios de escrita de código

//1. 
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
//a) Crie um novo array que contenha apenas o nome
// dos doguinhos:

    const novoArrayD = pets.map((item, index, array) => {
     return item.nome
  })
  console.log(novoArrayD)

//b) Crie um novo array apenas com os cachorros salsicha:

const novoArrayE = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })
 console.log(novoArrayE)

/*c)Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"*/

function cupomPoodle(item){
    return item.raca === "Poodle"
}
function nomePoodle(item){
    return `Você ganhou um cumpom de desconto de 10% para tosar o/a ${item.nome}` 
}
const novoArrayF = pets.filter(cupomPoodle)
const nomeDosPoodles = novoArrayF.map(nomePoodle) 
 console.log(nomeDosPoodles)

//2. 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) Crie um novo array que contenha apenas o nome de cada item.

 const novoArrayG = produtos.map((item, index, array) => {
    return item.nome
 })
 console.log(novoArrayG)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles.

function itemCompra(item){
    return item.nome
}
function itemUm(item){
    const novoItem = {...item}
    novoItem.preco = item.preco * 0.95
    return novoItem
}
const nomeDoProduto = produtos.map(itemUm) 
console.log(nomeDoProduto)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const novoArrayI = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })
 console.log(novoArrayI)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

function itemCompra(item){
    return item.nome.includes('Ypê')
}
const novoArrayJ = produtos.filter(itemCompra)
console.log(novoArrayJ)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

function itensCompras(item){
    return item.nome.includes('Ypê')
}
function itensYpê(item){
    return `Compre ${item.nome} por ${item.preco}` 
}
const novoArrayK = produtos.filter(itensCompras)
const nomeDosProdutos = novoArrayK.map(itensYpê) 
console.log(nomeDosProdutos)