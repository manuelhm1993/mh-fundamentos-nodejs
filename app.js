// Cuando se trabaja con nodejs no es necesario colocar la extensión .js equivalente a import frutas from "./modulos/frutas.js";
const moduloFrutas = require('./modulos/frutas'); //require('./modulos/frutas.js'); // Opcional 

// Al usar require y se exportan varios elementos, se crea un objeto que contiene todo lo exportado
console.log(moduloFrutas);

moduloFrutas.frutas.forEach((fruta) => {
    console.count(fruta);
});

console.log(moduloFrutas.dinero);