//Exercício 1

//a) Basta utilizar process.argv[2]. Essa propriedade irá armazenar uma cópia, somente leitura, 
//do valor original de argv[0] passado quando o arquivo.js for iniciado.

//b) 
    const nome =(process.argv[2])
    const idade = Number(process.argv[3])
       
console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
 
//c)
    const idadeNova = (idade + 7)

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeNova}`);
