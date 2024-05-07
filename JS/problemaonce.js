function validarValor() {
    let valor = document.getElementById("valor").value;
    if (isNaN(valor) || valor <= 0) {
      document.getElementById("valor").value = "";
    }
  }
  
  function mostrarNumeros() {
    let valor = document.getElementById("valor").value;
    let resultado = "";
  
    for (let i = 1; i <= valor; i++) {
      resultado += i + " ";
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  