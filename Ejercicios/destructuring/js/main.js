class Persona { // Creamos Clase Persona
	constructor(nombre, apellido, rut) {
		this.nombre = nombre, 
        this.apellido = apellido,
        this.rut = rut;
	} // contruyendo la clase con sus propiedades

	saludar() {
		console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
	} // saludar es un método de la clase Persona
} // TERMINA CLASE PERSONA

//Creando dos Objetos a partir de la Clase Persona (instanciando a la clase Persona)
let Javier = new Persona("Javier", "Salinas", "11.111.111-1");
let Fansico = new Persona("Fransico", "Salinas", "22.222.222-2");


// creamos a array simple
let arrayCualquiera = ["uno", "dos", "tres"];

//----------------- DESTRUCTURING ------------------

//destructuring array
let [hola, ...hilo] = arrayCualquiera; /*
Asginamos a hola al primer valor del array ('uno') y en hilo, todo el resto
*/

console.log(hola, hilo, arrayCualquiera);
// imprimimos hola, hilo, y el array completo

//Destructuring Objeto
// let {rut, nombre, apellido} = Javier; // desestructuramos el objeto Javier

// console.log(nombre, apellido, rut); // mostrtamos por consola las variables

let { nombre, ...resto } = Fansico; /*
    sacamos la variable nombre de nuestro objeto y obtenemos el resto
    OJO: el nombre de la variable dentro de las llaves debe ser igual al
    "key" o propiedad del objeto.
    { key : value }
*/

console.log(nombre, resto);

console.log(Fansico);




const sacarNombre = ({nombre}) => { // Recibimos un objeto y lo desestructuramos
	console.log(nombre);// Mostramos la variable nombre
};

sacarNombre(Javier); // Enviamos el objeto a la función y la ejecutamos


// ---------------------------

/*
EJERCICIO PARA FUSIONAR DOS
ARRAYS SEGÚN ALGUNA CONDICION
*/

let arrObj = [
	{ id: 1, nombre: "Juan" },
	{ id: 2, nombre: "Gabriel" },
	{ id: 3, nombre: "Javier" },
];

let arrObj2 = [
	{ id: 1, apellido: "Salinas" },
	{ id: 2, apellido: "Gonzales" },
	{ id: 3, apellido: "Pasten" },
];

let arrayResult = [...arrObj];

console.log('------- SEPARADOR ------');

let arreglo = arrObj.map((el) => { // Recorremos el primer Objeto

	// Buscamos con el método find el elemento que cumpla la condición
    let arr = arrObj2.find(el2 => el.id == el2.id && {...el, apellido: el2.apellido});
    // Esto retornará sólo el elemento encontrado.

    return arr 
    /* Si bien aquí tenemos un solo elemento
    la función map se encargará de adjuntar todos los resultados 
    en un solo array */
});

console.log(arreglo); // Imprimimos el arreglo.