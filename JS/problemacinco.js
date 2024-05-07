function Calcular() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const numero3 = parseInt(document.getElementById("numero3").value);

    let mayor = numero1;
    let menor = numero1;
    let medio;
    if (numero2 > mayor) {
        mayor = numero2;
    } else if (numero2 < menor) {
        menor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    } else if (numero3 < menor) {
        menor = numero3;
    }
    if (numero1 === mayor || numero1 === menor) {
        medio = numero2 > numero3 ? numero3 : numero2;
    } else if (numero2 === mayor || numero2 === menor) {
        medio = numero1 > numero3 ? numero3 : numero1;
    } else {
        medio = numero1 > numero2 ? numero2 : numero1;
    }
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        El número mayor es: ${mayor}   El número menor es: ${menor}    El número medio es: ${medio}
    `;
}
