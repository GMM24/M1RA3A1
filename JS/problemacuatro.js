function Numero() {
    const numero = document.getElementById("numero").value;
    const numeroConvertido = parseFloat(numero);
    let resultado;
    if (numeroConvertido > 0) {
      resultado = "El número es positivo";
    } else if (numeroConvertido < 0) {
      resultado = "El número es negativo";
    } else {
      resultado = "El número es neutro";
    }
    document.getElementById("resultado").innerHTML = resultado;
  }
  