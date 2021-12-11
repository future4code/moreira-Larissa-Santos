/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// Montado o jogo

console.log("Boas vindas ao jogo de Blackjack!")


if (confirm("Quer iniciar uma nova rodada?")) {
   rodada1()
} else {
   console.log("O jogo acabou.")
}

function rodada1() {
   const usuario = []
   const computador = []
   usuario.push(comprarCarta())
   usuario.push(comprarCarta())
   computador.push(comprarCarta())
   computador.push(comprarCarta())
   let pontoUsuario = usuario[0].valor + usuario[1].valor
   let pontoComputador = computador[0].valor + computador[1].valor

   console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - pontuação ${pontoUsuario}`)

   console.log(`Computador - cartas: ${computador[0].texto} ${computador[1].texto} - pontuação ${pontoComputador}`)

   if (pontoUsuario === pontoComputador) {
      console.log("Empate!")
   }
   else if (pontoUsuario > pontoComputador) {
      console.log("O usuário ganhou!")
   }
   else {
      console.log("O computador ganhou!")
   }
}

