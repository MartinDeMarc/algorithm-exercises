

// Armar una clase Helper, la cual tenga los siguientes metodos:      

// 	1- Multiplicar 2 numeros, sin utilizar el operador de multiplicacion.
// 	2- Obtener el numero mayor dentro de un arreglo. Solo iterar 1 vez.
// 	3- Dado un arreglo, eliminar todos los "undefined", "null", "false" y 0 (no sus valores en string). Iterar solo 1 vez.
// 	4- Dado un arreglo multidimensional, obtener todos los valores en un nuevo arreglo de una sola dimension. Usar recursividad
// 		Ejemplo: [1, [2, [3, 4]], 'hola', [1, 'buenos dias']] => [1, 2, 3, 4, 'hola', 1, 'buenos dias']
// 	5- Dado un string, devolver un objeto/array que indique la palabra que mas veces se repite, y su cantidad.
// 		Ejemplo: "Este es un string, el cual es un string donde se repite muchas veces la palabra es" => {es: 3} / ['es' => 3]
// 	6- Verificar si un string es un palíndromo.
// 	7- Dado 3 numeros, devolver el mayor. Adaptar esto para que funcione con cualquier cantidad de numeros.

class Helper {

    // 	1- Multiplicar 2 numeros, sin utilizar el operador de multiplicacion.
    
    static multiplicar(n1, n2) {
        let result = 0;
        for (let i = 0; i < Math.abs(n2); i++) {
            result += Math.abs(n1);
        }
        if (n1 < 0 && n2 < 0) {
            return result;
        } else if (n1 < 0 || n2 < 0) {
            return -result;
        } else {
            return result;
        }
    }
    
    // 	2- Obtener el numero mayor dentro de un arreglo. Solo iterar 1 vez.

    static obtenerMayor(arr) {
        let maxVal = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxVal) {
                maxVal = arr[i];
            }
        }
        return maxVal;
    }

    // 	3- Dado un arreglo, eliminar todos los "undefined", "null", "false" y 0 (no sus valores en string). Iterar solo 1 vez.
    static removeFalseyValues(arr) {
        return arr.filter(val => val !== undefined && val !== null && val !== false && val !== 0);
    }

    // 	4- Dado un arreglo multidimensional, obtener todos los valores en un nuevo arreglo de una sola dimension. Usar recursividad
    
    static flatten(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result = result.concat(Helper.flatten(arr[i]));
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }

    

// 	5- Dado un string, devolver un objeto/array que indique la palabra que mas veces se repite, y su cantidad.
    
    static palabrasRepetidas(str) {
        const palabras = str.toLowerCase().match(/\w+/g);
        const conteo = {};
        palabras.forEach((palabra) => {
          conteo[palabra] = (conteo[palabra] || 0) + 1;
        });
        const resultado = Object.entries(conteo);
        resultado.sort((a, b) => b[1] - a[1]);
        return [resultado[0]];
    }

  // 	6- Verificar si un string es un palíndromo.
    
    static esPalindromo(str) {
        const cleanStr = str.toLowerCase().replace(/\W/g, '');
        const reversedStr = cleanStr.split('').reverse().join('');
        return cleanStr === reversedStr;
    }

   // 	7- Dado 3 numeros, devolver el mayor. Adaptar esto para que funcione con cualquier cantidad de numeros.
    
    static numeroMayor(nums) {
        return Math.max(...nums);
    }
}



// 	1- Multiplicar 2 numeros, sin utilizar el operador de multiplicacion.


console.log(`El resultado de la multiplicacion es ${Helper.multiplicar(5, 5)}`);  // 25
console.log( `El resultado de la multiplicacion es ${Helper.multiplicar(2, 2)}`);  // 4 

ejercicio1.innerHTML = `1) El resultado de multiplicar es ${Helper.multiplicar(5, 5)}`;
ejercicio1b.innerHTML = `1b) El resultado de la segunda multiplicacion es ${Helper.multiplicar(2, 2)}`;

 // 	2- Obtener el numero mayor dentro de un arreglo. Solo iterar 1 vez.

 const arr = [2,4,9,15,3,1]
console.log( ` El numero mayor dentro del arreglo es ${Helper.obtenerMayor(arr)}`);  // 15

ejercicio2.innerHTML = `2) El numero mayor dentro del arreglo es ${Helper.obtenerMayor(arr)}`

 // 	3- Dado un arreglo, eliminar todos los "undefined", "null", "false" y 0 (no sus valores en string). Iterar solo 1 vez.

 const eliminarUndefined = [42, 0, undefined, null, 20, false, 10, "Hola"]

 console.log(`El arreglo sin valores falsos es ${Helper.removeFalseyValues(eliminarUndefined)}`); // [42, 20, 10, 'Hola']

 ejercicio3.innerHTML = `3) El arreglo sin valores falsos es ${Helper.removeFalseyValues(eliminarUndefined)}`

  // 	4- Dado un arreglo multidimensional, obtener todos los valores en un nuevo arreglo de una sola dimension. Usar recursividad

 const arrayMultidimensional = [1, [2, [3, 4]], 'hola', [1, 'buenos dias']];
 console.log(Helper.flatten(arrayMultidimensional));

  ejercicio4.innerHTML = `4) El resultado es: ${Helper.flatten(arrayMultidimensional)}`;


// 5 -   Dado un string, devolver un objeto/array que indique la palabra que mas veces se repite, y su cantidad.

const stringDePalabras = "Esto es un string donde se esta evaluando la palabra mas repetida. La palabra es"

 console.log(`El resultado de la palabra mas repetida es: ${Helper.palabrasRepetidas(stringDePalabras)}`);  // ['es', 2]

 ejercicio5.innerHTML = `5) El resultado de la palabra mas repetida es: ${Helper.palabrasRepetidas(stringDePalabras)}`

  // 	6- Verificar si un string es un palíndromo.

  const stringDePalindromo = "Martin"
  const stringDePalindromo2 = "A man, a plan, a canal, Panama"

  console.log(Helper.esPalindromo(stringDePalindromo));  // False 
  console.log(Helper.esPalindromo(stringDePalindromo2));  // True

  ejercicio6.innerHTML = `6) El resultado del Palindromo es : ${Helper.esPalindromo(stringDePalindromo)}`
  ejercicio6b.innerHTML = `6b) El resultado del Palindromo es : ${Helper.esPalindromo(stringDePalindromo2)}`


   // 	7- Dado 3 numeros, devolver el mayor. Adaptar esto para que funcione con cualquier cantidad de numeros.

   console.log(Helper.numeroMayor([3,5,9,4,2])); // 9

   ejercicio7.innerHTML = `7) El numero mayor es: ${Helper.numeroMayor([3,5,9,4,2])}`













