//Ejecicio #1
/*
Inicia una promesa que se resuelva después de 2 segundos con un número aleatorio entre 1 y 100.
Luego, toma ese número y crea una segunda promesa que se resuelva después de 3 segundos con el resultado de elevar ese número al cuadrado.
Finalmente, toma el resultado de la segunda promesa y crea una tercera promesa que se resuelva después de 1 segundo con la
raíz cuadrada del número resultante.
*/


const promesaNumeroAleatoreo = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(Math.floor(Math.random() * (100 - 1 + 1) + 1));
        }, 2000)
    });
}


const elevarAlCuadrado = ( numRand = -1 ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(Math.pow(numRand,2));
        }, 3000)
    });
}


const raizCuadrada = ( numPow = -1 ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(Math.sqrt(numPow));
        }, 1000)
    });
}


promesaNumeroAleatoreo().then( resp => {
    console.log(resp)
    elevarAlCuadrado(resp).then( numPow => {
        console.log(numPow)
        raizCuadrada(numPow).then( console.log )
        .catch( console.error )
    } ).catch( console.error )
} ).catch( console.error );
