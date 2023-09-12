/*

Ejercicio 5: Promesa con Cancelación
Crea una función que realice las siguientes tareas:

Inicia una promesa que se resuelva después de 5 segundos con un mensaje.
Si se llama a una función cancel antes de que se cumplan los 5 segundos, la promesa debe rechazarse con el mensaje "Promesa cancelada".

*/

const mainFunctionFive = () => {
    const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Promesa resuelta");
        }, 5000);
    });
    
    
    const cancel = () => {
    promesa.reject("Promesa cancelada");
    };

    return { promesa, cancel };
}

const { promesa, cancel } = promesaConCancelacion();

promesa.then( console.log );

cancel();

promesa.catch(error);

