//Exercicios
//1.

//A)
//const minhaString: string = 24
//Não é possivel atribuir  numero em uma variavel tipo string.

//B)
const meuNumero: number | string = '24'
//através  do operador logico OR que será retornar true se um dos valores comparados forem verdadeiros.

//C)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: ArcoIris
}

enum ArcoIris {
    VERDE = 'Verde',
    VERMELHO = 'Vermelho',
    VIOLETA = 'Violeta',
    AMARELO = 'Amarelo',
    AZUL = 'Azul',
    LARANJA = 'Laranja',
}

const pessoa1: pessoa = {
    nome: 'Larissa',
    idade: 24,
    corFavorita: ArcoIris.LARANJA
}
const pessoa2: pessoa = {
    nome: 'Janaylla',
    idade: 21,
    corFavorita: ArcoIris.AZUL
}
const pessoa3: pessoa = {
    nome: 'Kennedy',
    idade: 22,
    corFavorita: ArcoIris.VERMELHO
}