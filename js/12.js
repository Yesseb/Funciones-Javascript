function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Muestra los numeros pares de los siguientes valores '1,2,3,4,5,6,7,8,9,10'")
console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));