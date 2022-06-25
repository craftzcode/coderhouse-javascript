//Perdir un numero ediante prompt y sumarle otro en cada repeticion, realizando una salida por cada uno y cortar al apretar 0

let ingreso = parseInt(prompt('Ingresar un numero'));
console.log(ingreso)
let result;

if (ingreso > 0) {
    while(ingreso != 0){
        for(i = 0; i < 1; i++) {
            result = ingreso + 2;
            console.log(result);
        };
        ingreso = parseInt(prompt('Ingresar un dato'));
    }    
};