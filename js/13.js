function sumaArregloReduce(arr) {
    return arr.reduce((suma, num)  => suma + num, 0);
}
console.log("Muestra la suma de los numeros '5,7,32,64,204' con reduce")
console.log(sumaArregloReduce([5, 7, 32, 64, 204]));