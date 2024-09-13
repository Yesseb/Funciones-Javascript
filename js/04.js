function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) resultado *= i;
    return resultado;
}
console.log("Muestra el factorial de 5")
console.log(factorial(5));