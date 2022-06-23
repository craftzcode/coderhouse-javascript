console.log('Unas preguntas para conocerte mejor');

let nombre = prompt('Ingresa tu nombre');
console.log(nombre);

let apellido = prompt('Ingresa tu apellido');
console.log(apellido);

let edad = parseInt(prompt('Tu edad'));
console.log(edad);

let nombre_completo = 'Tu nombre es' + ' ' + nombre  + ' ' + apellido + ' ' + 'tenes' + ' ' +  edad + ' años ';
console.log(nombre_completo);

let verificacion_nombre
verificacion_nombre = prompt('Es correcto? si / no');

if (verificacion_nombre == 'no') {
    let nombre = prompt('Ingresa tu nombre');
    console.log(nombre);

    let apellido = prompt('Ingresa tu apellido');
    console.log(apellido);

    let edad = parseInt(prompt('Tu edad'));
    console.log(edad);
} else {
    console.log('Sigamos :)');
}

let mas_preguntas = prompt('Responde con si / no si queres mas preguntas'); 

if (mas_preguntas == 'si') {
    let super_hero = prompt('Cual es tu superheroe fav?');
    console.log(super_hero);
    let comida_favorita = prompt('Cual es tu comida fav?');
    console.log(comida_favorita);

    console.log('Sos un cibernauta come' + ' ' + comida_favorita + ' ' + ' que le gusta' + ' ' + super_hero)
} else {
    console.log('Gracias por tu tiempo!');
}
