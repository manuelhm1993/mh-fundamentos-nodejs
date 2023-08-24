// Módulo para trabajar con rutas de directorios y archivos
const path = require('path'); 

// Devuelve la ruta absoluta desde el directorio raíz de un directorio dato
// Parámetros:
    // - ruta: nombre del directorio solicitado
    // - origin: por defecto es un string vacío, si no se pasa tomará la carpeta públic, si src tomará la carpeta src
const getRutaAbsoluta = (ruta, origin = '') => {
    console.log(path.join(__dirname, ruta));

    let nuevaRuta = path.join(__dirname, ruta)
    .split('\\')
    .filter(item => (item !== 'src') && (item !== 'mh-functions'))
    .join('\\');

    if(origin === 'src') {
        nuevaRuta = path.join(__dirname, ruta)
        .split('\\')
        .filter(item => item !== 'mh-functions')
        .join('\\');
    }
    
    return nuevaRuta;
};

module.exports = {
    getRutaAbsoluta
};
