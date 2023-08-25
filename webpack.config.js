// Resuelve la ruta absoluta de la salida
const path = require('path');

module.exports = {
  // Entrada
  entry: {
    // Archivos de entrada para ser compilados
    bootstrap: './src/resources/js/app.js',
  },
  // Salida
  output: {
    // Ruta de archivo compilado
    path: path.resolve(__dirname, 'public/js'),
    // Nombre del archivo compilado
    filename: 'app.js',
  },
  // Cargadores
  module: {
    rules: [
      {
        // Matriz para indicar los cargadores
        use: ["style-loader", "css-loader", "sass-loader"],
        // Expresión regular para indicar el tipo de archivos donde se usarán
        test: /\.(css|sass|scss)$/,
      },
      {
        // Resolución de imagenes
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      }
    ],
  },
  // Modo de trabajo
  mode: 'development',
};
