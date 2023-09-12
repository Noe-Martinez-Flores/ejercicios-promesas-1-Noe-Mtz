//Ejercicio #2


/*
Ejercicio 2: Promesa de Múltiples Solicitudes
Crea una función que realice las siguientes tareas:


Recibe un array de URLs como argumento.
Utiliza fetch y promesas para realizar una solicitud GET a cada URL en el array.
Devuelve una promesa que se resuelva con un array de los resultados de todas las solicitudes.

*/


const manyPetitions = ( apies  = [] ) => {
   
   return Promise.all( apies.map( url => fetch(url))).then( resp => Promise.all( resp.map( r => r.json()))).then( console.log )
}


manyPetitions( ['https://pokeapi.co/api/v2/pokemon/2','https://pokeapi.co/api/v2/pokemon/5','https://pokeapi.co/api/v2/pokemon/9'] );          