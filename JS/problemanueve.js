function mostrarCaracteres() {
    let texto = document.getElementById("texto").value;
    let resultado = "";
  
    for (let i = 0; i < texto.length; i += 2) {
      resultado += texto[i];
      if (i + 1 < texto.length) {
        resultado += texto[i + 1];
      }
      resultado += " ";
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  