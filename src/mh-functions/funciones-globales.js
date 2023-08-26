// Importación de módulos
const path = require('path');

// Devuelve la ruta absoluta desde el directorio raíz de un directorio dato
// Parámetros:
    // - currentDir: directorio raíz
    // - dirName: nombre del directorio solicitado
    // - src: booleando que indica si está o no dentro de src
const getRutaAbsoluta = (rootDir, dirName, src) => {
    let nuevaRuta = path.join(rootDir, dirName);

    if(!src) {
        nuevaRuta = path.join(rootDir.slice(0, -3), dirName);
    }
    
    return nuevaRuta;
};

module.exports = {
    getRutaAbsoluta
};
