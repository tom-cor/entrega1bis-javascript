let input = prompt("Generador de formulario\nIngresa el primer dato a pedir (nombre, apellido, edad, ...)");
let nombre = "";
let datos = new Array();
let tabla = new Array();

if(input == "")
{
    alert("No se ingresaron datos. Refresque la pagina para comenzar de nuevo.");
    throw new Error();
}

while(input != "")
{
    if(!/^[a-zA-Z]+$/.test(input)) {
        alert("Contiene caracteres que no son letras. Refresque la pagina para comenzar de nuevo.")
        throw new Error();
    }
    datos.push(input);
    input = prompt("Para finalizar, presione enter\nCaso contrario, ingrese siguiente dato a solicitar")
}

alert(`Estos son los datos a pedir: ${datos}`);
tabla.push(datos);

while ("si" == prompt("Escriba \"si\" para cargar una planilla en su formulario. De lo contrario, presione enter.")) {
    let fila = new Array();
    datos.forEach(element => {
        fila.push(prompt(`Ingrese ${element}`));
    });
    tabla.push(fila);
}

alert(tabla.join('\n'));
console.log(tabla);