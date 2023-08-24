// Importar a través de destructory
const { frutas, dinero } = require('./src/frutas');

frutas.forEach((fruta) => {
  console.log(fruta);
})

console.log(dinero);
