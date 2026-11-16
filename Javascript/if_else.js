let idade = 18
let compra = 400

if( idade >= 18 && compra >=400) {
    console.log("Desconto aplicado")
} else if (idade < 18 && compra > 400) {
    console.log("Você não tem descontos")
} else {
    console.log("Erro")
}