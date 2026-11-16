function CalcularPreco () {
    let precoAlcool = document.getElementById("alcool").value
    let precoGasolina = document.getElementById("gasolina").value

    if(precoAlcool != "") {
        if (precoGasolina != "") {

        } else {
            alert("Preencha o preço da gasolina")
        }
    } else {
          alert("Preencha o preço do álcool")
    }

    let resultado = precoAlcool / precoGasolina 
    if(resultado > 0.7) {
        alert("Melhor utilizar Gasolina")
    } else {
        alert("Melhor utilizar álcool")
    }

}

CalcularPreco()