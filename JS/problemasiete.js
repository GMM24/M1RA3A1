function mostrarPares(event) {
    event.preventDefault();
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);

    const numerosPares = [];
    for (let i = numero1; i <= numero2; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        Números pares encontrados:
            ${numerosPares.map(numero => `<li>${numero}</li>`).join("")}
    
    `;
}
