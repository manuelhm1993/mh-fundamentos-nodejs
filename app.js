// Cuando se trabaja con nodejs no es necesario colocar la extensión .js equivalente a import frutas from "./modulos/frutas.js";
// const moduloFrutas = require('./modulos/frutas'); //require('./modulos/frutas.js'); // Opcional 

/* moduloFrutas.frutas.forEach((fruta) => {
    console.count(fruta);
}); */

// console.log(moduloFrutas.dinero);

// Se puede usar destructory
const { frutas, dinero } = require('./modulos/frutas');

// Al usar require y se exportan varios elementos, se crea un objeto que contiene todo lo exportado
console.log(frutas);
console.log(dinero);

frutas.forEach((fruta) => {
  console.log(fruta);
})

console.log(dinero);
