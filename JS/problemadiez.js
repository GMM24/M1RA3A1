const textoInput = document.getElementById('texto');
const palabraInput = document.getElementById('palabra');
const contarBtn = document.getElementById('contar');
const resultadoDiv = document.getElementById('resultado');

contarBtn.addEventListener('click', () => {
  const texto = textoInput.value;
  const palabra = palabraInput.value;
  if (!texto || !palabra) return;

  const textoMinusculas = texto.toLowerCase();
  const palabraMinusculas = palabra.toLowerCase();

  let repeticiones = 0;
  let indice = textoMinusculas.indexOf(palabraMinusculas);
  while (indice !== -1) {
    repeticiones++;
    indice = textoMinusculas.indexOf(palabraMinusculas, indice + palabraMinusculas.length);
  }

  resultadoDiv.innerHTML = `
    La palabra "${palabra}" se repite ${repeticiones} veces en el texto.
  `;
});
