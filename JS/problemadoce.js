const palabras = document.getElementById('palabras');
const primerDigitoBtn = document.getElementById('primer-digito');
const ultimoDigitoBtn = document.getElementById('ultimo-digito');
const caracteresBtn = document.getElementById('caracteres');
const tablaResultado = document.getElementById('tabla-resultado');

primerDigitoBtn.addEventListener('click', () => {
  const palabra = palabras.value;
  if (!palabra) return;
  const primerDigito = palabra[0];
  mostrarResultado(primerDigito);
});

ultimoDigitoBtn.addEventListener('click', () => {
  const palabra = palabras.value;
  if (!palabra) return;
  const ultimoDigito = palabra[palabra.length - 1];
  mostrarResultado(ultimoDigito);
});

caracteresBtn.addEventListener('click', () => {
  const palabra = palabras.value;
  if (!palabra) return;
  const caracteres = palabra.split('');
  mostrarResultado(caracteres.join('</br>'));
});

function mostrarResultado(resultado) {
  tablaResultado.innerHTML = `
    <table>
      <tr>
        <th>Resultado</th>
      </tr>
      <tr>
        <td>${resultado}</td>
      </tr>
    </table>
  `;
}
