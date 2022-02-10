function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value / 100;

    var imc = peso / altura ** 2;
    var text = ""

    if (imc < 17) {
        text="Muito abaixo do peso"
    } else if (imc > 17 && imc <= 18.49){
        text="Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.99){
        text="Peso normal"
    } else if (imc >= 25 && imc <= 29.99){
        text="Acima do peso"
    } else if (imc >= 30 && imc <= 34.99){
        text="Obesidade I"
    } else {
        text="Obesidade II"
    }

    document.getElementById('imc').innerHTML=text
}