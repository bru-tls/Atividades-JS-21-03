/*/  Para doar sangue é necessário ter entre 18 e 69 anos de idade.
 Pessoas com idade entre 60 e 69 anos, só podem doar se não for a sua primeira doação. 
 Escreva um Algoritmo em Java que obtenha via teclado o nome do doador (String), 
a idade (inteiro) do doador 
e se é a primeira doação (boolean). 
De acordo com as Regras para a doação, mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo: /*/


const leia = require('readline-sync')

let nome 
let idade
let primeiraDoacao

nome = leia.question("\nDigite seu nome:")
idade = leia.questionInt("\nDigite sua idade:")
primeiraDoacao = leia.keyInYNStrict("\nsua primeira doacao de sangue?")

if (idade >= 70 || idade <= 17){
    
    console.log(nome + "\nVocê não esta apto(a) para doar sangue!")

}else if (idade >= 18 && idade <= 59) {

    console.log(nome + "\nVocê esta apto(a) para doar sangue!")

}else if (idade >= 60 && idade <= 69 && !primeiraDoacao) {

    console.log (nome + "\nVocê esta apto(a) para doar sangue!")
 
}else if (idade >= 60 && idade <= 69 && primeiraDoacao) {

    console.log (nome + "\nVocê não esta apto(a) para doar sangue!")
}
