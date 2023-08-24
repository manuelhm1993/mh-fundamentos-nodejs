const frutas = ['Plátano', 'Manzana', 'Plátano', 'Pera'];
const dinero = 1000;

// Usar el objeto module con la propiedad exports (equivalente a export default funcion;)
// module.exports = frutas;

// De esta manera se exportan varios elementos, similar al export nombrado de ES6
module.exports = {
    frutas: frutas,
    dinero: dinero,
};

