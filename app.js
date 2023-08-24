// Importar a través de destructory (para referenciar que se buscará dentro de nuestras propios directorios se usa ./)
const { frutas, dinero } = require('./src/frutas');

// Para indicar que se buscará en node_modules no se usa ./
const cowsay = require("cowsay");

frutas.forEach((fruta) => {
  console.log(fruta);
})

console.log(dinero);

// Uso de cowsay
console.log(cowsay.say({
    text : "Hola MHenriquez",
    e : "oO",
    T : "U "
}));
