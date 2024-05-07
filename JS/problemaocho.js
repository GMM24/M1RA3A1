function CalcularMCD(event) {
    event.preventDefault();

    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);

    let mcd = 1;
    for (let i = 1; i <= Math.min(numero1, numero2); i++) {
        if (numero1 % i === 0 && numero2 % i === 0) {
            mcd = i;
        }
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        Máximo común divisor (MCD): ${mcd}
    `;
    alert(`El MCD de ${numero1} y ${numero2} es ${mcd}`);
    console.log(`El MCD de ${numero1} y ${numero2} es ${mcd}`);
}
