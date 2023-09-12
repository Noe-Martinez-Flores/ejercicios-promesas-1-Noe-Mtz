/* 
Ejercicio 3: Promesas Paralelas
Crea una función que realice las siguientes tareas:

Recibe un array de funciones que devuelven promesas como argumento.
Ejecuta todas las funciones en paralelo y espera a que todas las promesas se resuelvan.
Devuelve una promesa que se resuelva con un array de los resultados de todas las promesas.


*/

const funcionuno = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("funcion 1 hecha")
        }, 2000)
    })
}

const funciondos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("funcion 2 hecha")
        }, 2000)
    })
}

const funciontres = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("funcion 3 hecha")
        }, 2000)
    })
}

const funArrayFun = ( funciones = [] ) => {
    const promesas = funciones.map( i => i() );
    return Promise.all(promesas)
}

funArrayFun([funcionuno, funciondos, funciontres]).then( console.log ).catch( console.error );