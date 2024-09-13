function contarFrecuencia(arr) {
    return arr.reduce((frecuencia, item) => { frecuencia[item] = (frecuencia[item] || 0) + 1;
        return frecuencia;
    }, {});
}
console.log("Muestra el objeto de precuencia para el arreglo '[1,1,2,2,3,3]'")
console.log(contarFrecuencia([1, 1, 2, 2, 3, 3]));