/*

Ejercicio 5: Promesa con Cancelación
Crea una función que realice las siguientes tareas:

Inicia una promesa que se resuelva después de 5 segundos con un mensaje.
Si se llama a una función cancel antes de que se cumplan los 5 segundos, la promesa debe rechazarse con el mensaje "Promesa cancelada".

*/

const mainFunctionFive = () => {
    return new Promise( (resolve, reject) => {
        const time = setTimeout( () => {
            clearTimeout(time);
            reject("Promesa Cancelada")
            resolve( "Promsea resuelta ")
        }, 5000);
    });
}


mainFunctionFive().then( console.log )

