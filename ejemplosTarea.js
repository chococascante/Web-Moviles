function quitarDuplicados(arreglo) {
  return [...new Set(arreglo)];
}

function quitarDuplicados2(arreglo) {
  const nuevoArreglo = [];
  for (let elem of arreglo) {
    if (!nuevoArreglo.includes(elem)) {
      nuevoArreglo.push(elem);
    }
  }

  return nuevoArreglo;
}

function clonarArreglo(arreglo) {}

function revertirNumero(numero) {
  // return numero.toString().split("").reverse().join("");
  const nuevoNum = "";
  for (let i = numero.length - 1; i >= 0; i--) {
    nuevoNum += numero[i];
  }
  return nuevoNum;
}

// function palindromo(palabra) {
//   const palabraRevertida = palabra.split("").reverse().join("");
//   for (let i = 0; i < palabra.length; i++) {
//     if (palabra[i] !== palabraRevertida[i]) {
//       return false;
//     }
//   }

//   for (let i = 0; i < palabra.length / 2; i++) {
//     for (let j = palabra.length - 1; i >= palabra.length / 2; i--) {
//       if (palabra[i] !== palabra[j]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

const consolaElemento = (elemento) => {
  console.log(elemento);
};

// For Each
function forEach(arreglo, funcion) {
  for (let i = 0; i < arreglo.length; i++) {
    funcion(arreglo[i]);
  }
}

// forEach([1, 2, 3], consolaElemento);

function mapArreglo(arreglo, funcion) {
  const nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    nuevoArreglo[i] = funcion(arreglo[i]);
  }
  return nuevoArreglo;
}

const resultado = mapArreglo([1, 2, 3], (numero) => ++numero);
// console.log(resultado);

// Filter

function filterArray(arreglo, funcion) {
  const nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (funcion(arreglo[i])) {
      nuevoArreglo.push(arreglo[i]);
    }
  }
  return nuevoArreglo;
}

console.log(filterArray([1, 2, 3, 4, 5], (numero) => numero % 2 === 0));

console.log([1, 2, 3, 4, 5].filter((numero) => numero % 2 === 0));
