function esPaslindromo(palabra) {
    const revertida = palabra.split('').reverse().join('');
    return palabra === revertida;
}
console.log("Muestra si 'reconocer' es palindromo")
console.log(esPaslindromo("reconocer"));