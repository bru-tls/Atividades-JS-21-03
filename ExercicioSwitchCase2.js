/*Com base na tabela abaixo, escreva um algoritmo em Java, que simule uma Calculadora simples. 
O programa deverá ler dois números float: numero1 e numero2, 
e na sequência ler o Código da operação matemática (número inteiro de 1 a 4). 
A seguir, mostre na tela o resultado da operação entre os 2 números. Cas
o a operação seja diferente do intervalo 1 a 4, mostre a mensagem Operação Inválida!*/


const leia = require('readline-sync')

let n1
let n2
let operacao


n1 = leia.questionFloat("Digite o primeiro numero da operacao:")
n2 = leia.questionFloat("Digite o segundo numero da operacao: ")

console.log("\n Operacoes matematicas: ")
console.log("\n 1- Soma")
console.log("\n 2- Subtração")
console.log("\n 3- Multiplicação")
console.log("\n 4- Divisão")

operacao  = leia.questionInt("\nEscolha a operacao matematica:") 

switch(operacao){
    case 1:
        console.log("\n" + n1 + " + " + n2 + " = " + (n1+n2))
        break
    case 2:
        console.log("\n" + n1 + " - " + n2 + " = " + (n1-n2))
            break
    case 3:
        console.log("\n" + n1 + " x " + n2 + " = " + (n1*n2))
            break
    case 4:
        console.log("\n" + n1 + " ÷ " + n2 + " = " + (n1/n2))
                break
            
    default:
      console.log("Operação Inválida!")
                    }