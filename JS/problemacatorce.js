function contarVocales() {
    const texto = document.getElementById("texto").value.toLowerCase();
    const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let caracter of texto) {
      if (vocales.hasOwnProperty(caracter)) {
        vocales[caracter]++;
      }
    }
    const tabla = document.createElement("table");
    tabla.setAttribute("border", 1);
    const filaEncabezado = document.createElement("tr");
    filaEncabezado.appendChild(document.createElement("th")).textContent = "VOCAL";
    filaEncabezado.appendChild(document.createElement("th")).textContent = "CANTIDAD";
    tabla.appendChild(filaEncabezado);
    for (const vocal in vocales) {
      const filaVocal = document.createElement("tr");
      filaVocal.appendChild(document.createElement("td")).textContent = vocal.toUpperCase();
      filaVocal.appendChild(document.createElement("td")).textContent = vocales[vocal];
      tabla.appendChild(filaVocal);
    }
    const resultado = document.getElementById("resultado");
    resultado.textContent = ""; 
    resultado.appendChild(tabla);
  }
  