//3

function filme(nome: string, lancamento: number, genero: Genero, pontuacao?: number): FilmeEscolhido{
    
    const filmeEscolhido: FilmeEscolhido = {
        nome: nome,
        lancamento: lancamento,
        genero: genero,
        pontuacao: pontuacao
    }

    return filmeEscolhido
}

type FilmeEscolhido = {
    nome: string
    lancamento: number
    genero: Genero
    pontuacao?: number
}

enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

console.log(filme("Alerta Vermelho", 2018, Genero.ACAO, 9))