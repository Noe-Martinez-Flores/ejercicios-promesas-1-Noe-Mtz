/*

Ejercicio 4: Promesas en Cadena con Retraso
Crea una función que realice las siguientes tareas:

Recibe un número n como argumento.
Utiliza un bucle para crear una cadena de promesas, donde cada promesa se resuelve después de N segundos con el número actual en el bucle.
Cada promesa debe imprimir el número en la consola antes de resolverse.
Finalmente, devuelve una promesa que se resuelva después de N segundos con el mensaje "Todas las promesas se resolvieron".


*/


const mainFuncion = ( numero = -1 ) => {
    const promesas = []
    for ( let i = 0; i < numero ; i++ ){
        console.log(numero)
        promesas.push (new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve( numero )
            }, numero * 1000)
        }))
    }

    Promise.all(promesas).then( resp => console.log(resp, "Todas las promesas resueltas")).catch ( console.error )


}

mainFuncion( 4 )