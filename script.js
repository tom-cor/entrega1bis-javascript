let input = prompt("Creador de tabla. Ingresa el primer parametro a pedir.");
let nombre = "";

do
{
    if(!/^[a-zA-Z]+$/.test(input)) {
        alert("Contiene caracteres que no son letras. Refresque la pagina para comenzar de nuevo.")
        break;
    }
    nombre = nombre + " " + input;
    input = prompt("Para finalizar, presione enter. Caso contrario, ingrese siguiente parametro.")
}
while(input != "")

if(nombre == "")
{
    alert("No se ingresaron datos.");
}

alert(nombre);