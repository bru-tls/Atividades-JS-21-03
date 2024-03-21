/*/ Com base na tabela abaixo, escreva um algoritmo em Java que leia o código de um item (número inteiro de 1 a 6) 
e a quantidade comprada deste item (número inteiro). 
A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

Valor total = quantidade * preço /*/


const leia = require('readline-sync')

let produto
let quantidade
let valor

console.log("\n Cardápio: ")
console.log("\n 1- Cachorro Quente")
console.log("\n 2- X-Salada")
console.log("\n 3- X-Bacon")
console.log("\n 4- Bauru")
console.log("\n 5- Refrigerante")
console.log("\n 6- Suco de laranja")

produto = leia.questionInt("\nDigite o codigo: ")

switch(produto){
case 1:
    valor = 10.00
    quantidade = leia.questionInt("\nQuantos? " ) 
    console.log(quantidade + " Cachorro(s) Quente(s)" + " e o valor total da compra é: " + (quantidade * valor))
break

case 2:
    valor = 15.00
    quantidade = leia.questionInt("\nQuantos? " ) 
    console.log(quantidade + " X-Salada(s)" + " e o valor total da compra é: " + (quantidade * valor))
break
     
case 3:
    valor = 18.00
    quantidade = leia.questionInt("\nQuantos? " ) 
    console.log(quantidade + " X-Bacon(s)" + " e o valor total da compra é: " + (quantidade * valor))
  break
case 4:
    valor = 12.00
    quantidade = leia.questionInt("\nQuantos? " ) 
    console.log(quantidade + " Bauru(s)" + " e o valor total da compra é: " + (quantidade * valor))
break
case 5:
    valor = 8.00
    quantidade = leia.questionInt("\nQuantos? " ) 
    console.log(quantidade + " Refrigerante(s)" + " e o valor total da compra é: " + (quantidade * valor))
break
        
case 6:
    valor = 13.00
    quantidade = leia.questionInt("\nQuantos? " ) 
    console.log(quantidade + " Suco(s) de laranja" + " e o valor total da compra é: " + (quantidade * valor))
break
        
default:
console.log("Digite um codigo valido!")
}