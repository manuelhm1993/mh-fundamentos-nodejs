// Importar a través de destructory
const { frutas, dinero } = require('./modulos/frutas');

frutas.forEach((fruta) => {
  console.log(fruta);
})

console.log(dinero);
