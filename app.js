// Cuando se trabaja con nodejs no es necesario colocar la extensión .js equivalente a import frutas from "./modulos/frutas.js";
const frutas = require('./modulos/frutas'); //require('./modulos/frutas.js'); // Opcional

frutas.forEach((fruta) => {
    console.count(fruta);
});
