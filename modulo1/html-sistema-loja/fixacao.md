function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu codigo aqui

 const salarioFixo = 2000
 let comissao 
 let salarioFinal
 comissao = qtdeCarrosVendidos * 100 + 0.05 * valorTotalVendas
 salarioFinal =  comissao + salarioFixo
 return salarioFinal
}