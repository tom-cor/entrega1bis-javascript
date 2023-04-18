let input = prompt("Ingresa tu primer nombre");
let nombre = "";

do
{
    if(!/^[a-zA-Z]+$/.test(input)) {
        alert("Contiene caracteres que no son letras. Refresque la pagina para comenzar de nuevo.")
        break;
    }
    nombre = nombre + " " + input;
    input = prompt("Para finalizar, presione enter. Caso contrario, ingrese segundo nombre o apellido.")
}
while(input != "")

if(nombre == "")
{
    alert("No se ingresaron datos.");
}

alert(nombre);