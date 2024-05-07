var texto1;
var texto2;
function Dato(){
    texto1=(document.getElementById("carne").value);
    texto2=(document.getElementById("nombre").value);
}
function Cargar(){
    Dato();
    document.getElementById("mensaje").innerHTML="  Nombre: " +  (texto1) + "  Contraseña: " + (texto2);
    alert("  Nombre: " +( texto1) + "  Contraseña: " + (texto2));
    console.log("  Nombre: " +( texto1) + "  Contraseña: " + (texto2));

}
 



