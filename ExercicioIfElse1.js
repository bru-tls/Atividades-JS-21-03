const leia = require('readline-sync')

let n1, n2, n3, res

n1 = leia.questionInt("Digite o numero A:")
n2 = leia.questionInt("Digite o numero B:")
n3 = leia.questionInt("Digite o numero C:")
res = n1+n2

if(n1+n2 > n3) {
     console.log(n1 + " + " + n2 + " = " + res + " > " + n3 + "\nA Soma de A + B é Maior do que C")
}
else if (n1+n2 < n3) {
    console.log(n1 + " + " + n2 + " = " + res + " < " + n3 + "\nA Soma de A + B é Menor do que C")
} else if (n1+n2 == n3) {
    console.log(n1 + " + " + n2 + " = " + res + " = " + n3 + "\nA Soma de A + B é Igual a C")}
    
