function convertirObjetosAStrings(arr) {
    return arr.map(obj => `Nombre: ${obj.nombre}, Edad: ${obj.edad}`);
}
console.log("Muestra la cadena resultante de convertir el objeto en el arreglo [{Nombre: 'Yesid', Edad: '20'}]")
console.log(convertirObjetosAStrings([{nombre:'Yesid',edad:'20'}]));