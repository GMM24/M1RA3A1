function crearTabla() {
    const filas = document.getElementById("filas").value;
    const columnas = document.getElementById("columnas").value;
    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    for (let i = 0; i < filas; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement("td");
            celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`;
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    } 
    const divTabla = document.getElementById("tabla");
    divTabla.appendChild(tabla);
    

}

