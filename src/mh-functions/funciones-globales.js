// Módulo para trabajar con rutas de directorios y archivos
const path = require('path'); 

// Devuelve la ruta absoluta desde el directorio raíz de un directorio dato
const getRutaAbsoluta = (ruta) => path.join(__dirname, ruta);

module.exports = {
    getRutaAbsoluta
};
