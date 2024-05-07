var cateto1;
var cateto2;
var cat;
function Dato(){
    cateto1=(document.getElementById("catetoa").value);
    cateto2=(document.getElementById("catetob").value);
}
function Cateto(){
    Dato();
    cat=((cateto1*cateto1)) + ((cateto2*cateto2));
    document.getElementById("mensaje").innerHTML="Hipotenusa: "+Math.sqrt(cat);
}