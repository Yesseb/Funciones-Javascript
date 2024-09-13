function sumarArreglo(arr) {
    return arr.reduce((suma, num) => suma + num, 0);
}
console.log("Muestra la suma de los numeros'8,10,12,14,16'")
console.log(sumarArreglo([8,10,12,14,16]));