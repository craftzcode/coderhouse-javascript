//Pedir un numero por prompt y repetir Hola la cantidad de veces ingresada

let ingreso = parseInt(prompt("Ingresar un numero"));
console.log(ingreso);
let result;


if (ingreso > 0) {
    for (i = 1; i <= ingreso; i++) {
        result = 'Hola';
        console.log(result);
    }
}
