//Exercícios de interpretação de código

// 1. a) O que vai ser impresso no console?
// No primeiro console vai aparecer o primeiro nome do elenco : Matheus Nachtergaele.
// No segundo console vai aparecer o ultimo nome do elenco: Virginia Cavendish.
// No terceiro aparece: canal: Globo, horario: 14h

//2. a) O que vai ser impresso no console?
// No primeiro aparece nome: Juca, idade: 3 e raca: SRD do cachorro.
// No segundo aparece nome: Juba, idade: 3 e raca: SRD do gato (Chama as informações do cachorro e só troca o nome).
// No terceiro aparece nome: Jubo, idade: 3 e raca: SRD (Chama as informações do gato e troca vogal a pela voal o).

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// OS três pontos é chamado de Sintaxes de Spread, onde é 
//feito uma cópia do objeto, ou acessado algumas das suas propriedades.


//3. a) O que vai ser impresso no console?
//false
//undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// No primeiro console foi retornado a propriedade(backender) do objeto pessoa.
//No segundo não existe dentro do objeto pessoa a propriedade altura e por isso deu undefined.

//- **Exercícios de escrita de código**

//1. Resolva os passos a seguir: 

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const aluna = {
    nome: "Larissa",
    apelidos: ["Lary", "Lay", "Florzinha"],
}
function imprimiMensagem(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
imprimiMensagem(aluna)


//b)Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const novaPessoa = {
    ...aluna,
    apelidos: ["Lary", "Larissinha", "Florzinha"]
}
imprimiMensagem(novaPessoa)

//2. Resolva os passos a seguir: 

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const pessoa1 = {
    nome: "Solange",
    idade: 58,
    profissão: "Escritora"
}
const pessoa2 = {
    nome: "Janaylla",
    idade: 20,
    profissão: "Desenvolvedora"
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

function inforPessoal(pessoa) {
    let informacao = []
    informacao.push(pessoa.nome)
    informacao.push(pessoa.nome.length)
    informacao.push(pessoa.idade)
    informacao.push(pessoa.profissão)
    informacao.push(pessoa.profissão.length)

    return informacao
}
console.log(inforPessoal(pessoa1))

function inforPessoal(pessoa) {
    let informacao = []
    informacao.push(pessoa.nome)
    informacao.push(pessoa.nome.length)
    informacao.push(pessoa.idade)
    informacao.push(pessoa.profissão)
    informacao.push(pessoa.profissão.length)

    return informacao
}
console.log(inforPessoal(pessoa2))

//3. Resolva os passos a seguir: 

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
    nome: "Laranja",
    disponibilidade: true
}
const fruta2 = {
    nome: "Uva",
    disponibilidade: true
}
const fruta3 = {
    nome: "Cacau",
    disponibilidade: true
}

//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

function frutas(fruta) {
    carrinho.push(fruta)
}
frutas(fruta1)
frutas(fruta2)
frutas(fruta3)

//d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

console.log(carrinho)

