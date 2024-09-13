function contarVocales(cadena) {
    const vocales = 'aeiouAEIOU';
    return cadena.split('').filter(letra => vocales.includes(letra)).length;
}
console.log("Cuantas vocales tiene 'anticonstitucionalidad'")
console.log(contarVocales("anticonstitucionalidad"));