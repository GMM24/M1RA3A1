var txt3;
var txt4;
var boton1;
function contarCaracteres() {
    const texto = (document.getElementById("texto1").value.toLowerCase()) + (document.getElementById("texto2").value.toLowerCase());
    const vocales = { s: 0};
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
  function mostrarCaracteresPares() {
    const texto = document.getElementById("texto").value;
    const caracteresPares = texto.split("").filter((caracter, indice) => indice % 2 === 0);
    const tabla = document.createElement("table");
    tabla.setAttribute("border", 1);
    const filaEncabezado = document.createElement("tr");
    filaEncabezado.appendChild(document.createElement("th")).textContent = "CORRELATIVO";
    filaEncabezado.appendChild(document.createElement("th")).textContent = "VALOR";
    tabla.appendChild(filaEncabezado);
    for (let i = 0; i < caracteresPares.length; i++) {
        const fila = document.createElement("tr");
        fila.appendChild(document.createElement("td")).textContent = i;
        fila.appendChild(document.createElement("td")).textContent = caracteresPares[i];
        tabla.appendChild(fila);
    }
    const divTabla = document.getElementById("tabla");
    divTabla.textContent = "";
    divTabla.appendChild(tabla);
}
function valores(){
  txt3=document.getElementById("txt3").value;
  txt4=document.getElementById("txt4").value;
  boton1= txt3 + txt4;
}
function btn1(){
 valores();
 document.getElementById("resultado2").innerHTML="Carácteres en total: " + boton1.length;  
}