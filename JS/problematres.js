function calcularPromedio(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const curso = document.getElementById("curso").value;
    const nota1 = parseInt(document.getElementById("nota1").value);
    const nota2 = parseInt(document.getElementById("nota2").value);
    const nota3 = parseInt(document.getElementById("nota3").value);
    const nota4 = parseInt(document.getElementById("nota4").value);
    const nota5 = parseInt(document.getElementById("nota5").value);
  
  
    const promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    alert("  Curso:  "+(curso)+"  Nombre:  "+(nombre)+"  Promedio: "+(promedio));
  }
  