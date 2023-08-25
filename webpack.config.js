// Resuelve la ruta absoluta de la salida
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // Archivos de entrada para ser compilados
    bootstrap: './src/resources/js/app.js',
  },
  output: {
    // Ruta de archivo compilado
    path: path.resolve(__dirname, 'public/js'),
    // Nombre del archivo compilado
    filename: 'app.js',
  },
};
