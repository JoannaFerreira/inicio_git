// Frete Gratis menos de 50k
// Frete Gratis para mais de 250 no valor final dos produtos
// 10 porcento de desconto em compras maiores que 1000
// bota custo 10 reias
// sapado custa 30 reias
// frepadrao 100 reias 
// mais de 10 produtos ganha 20% de desconto
//  descontos não se acomulam 


let nomeProduto1 = "bota"
let precoproduto1 = 100
let quantidadeDeProduto = 20

let produto1 = {
    nome: nomeProduto1,
    preco: precoproduto1
}

let produto2 = {
    nome: "calça",
    preco: 300
}

let produto3 = {
    nome: "blazer",
    preco: 700
}


let precoSomadoProduto = produto1.preco + produto2.preco + produto3.preco

let distanciaEndereco = 40
let = distanciaFreteGratis = 50

let frete

let desconto = 0

console.log("distanciaEndereco <= 50", distanciaEndereco <= 50)
console.log("precoSomadoProduto >= 250", precoSomadoProduto >= 250)

if (distanciaEndereco <= distanciaFreteGratis || precoSomadoProduto >= 250) {
    console.log("entrou no if")
    frete = 0
} else {
    console.log("entrou else")
    frete = 100
}

console.log("quantidadeDeProduto >= 10", quantidadeDeProduto >= 10)
if (quantidadeDeProduto >= 10) {
    desconto = 0.2
} else if (precoSomadoProduto >= 1000) {
    desconto = 0.1
}



if (desconto > 0) {
    desconto = (precoSomadoProduto + frete) * desconto
}


let valorFinal = precoSomadoProduto + frete - desconto

console.log("Valor somado dos Produtos:", precoSomadoProduto)
console.log("Valor do Frete:", frete)
console.log("Desconto:", desconto)
console.log("quantidade de Produto", quantidadeDeProduto)
console.log("Valor Final", valorFinal)
console.log("Valor Final", valorFinal)
