// Ejercicio 2. Muestre por pantalla el contenido de todos los archivos
// almacenados en el mismo. Por cada fichero, muestre también el número de
// lineas, palabras y caracteres.

import * as fs from 'fs';
import {spawn} from 'child_process';

/**
 * Código para detectar los ficheros de un directorio, mostrar su contenido y
 * además el número de líneas, palabras y caracteres.
 */
if (process.argv.length !== 3) {
  console.log('Please, specify a directory');
} else {
  const dirname = process.argv[2];

  if (!fs.existsSync(dirname)) {
    console.log('The directory does not exists.');
  } else {
    // -> Leyendo (el contenido de) un directorio.
    // La opción "withFileTypes" nos permite devolver un Json de cada elemento
    // de un directorio con información extra para el paso siguiente.
    const contenidoDirectorio = fs.readdirSync(dirname, {withFileTypes: true});

    contenidoDirectorio.forEach((elemento) => {
      // Esta línea sirve para que sólo muestre los ficheros, no los directorios
      // que pudieran estar dentro del directorio especificado.
      if (elemento.isFile()) {
        console.log();
        console.log(`- ${elemento.name} -`);
        console.log();

        const contenidoFichero = fs.readFileSync(`${dirname}/${elemento.name}`);


        const textoFichero = contenidoFichero.toString();

        console.log(contenidoFichero.toString());

        // Cálculo de líneas, palabras y caracteres a lo bruto.
        const lineas = textoFichero.split('\n');

        const palabras: string[] = [];

        lineas.forEach((linea) => {
          const aux = linea.split(' ');

          aux.forEach((palabra) => palabras.push(palabra));
        });

        const caracteres: string[] = [];

        palabras.forEach((palabra) => {
          const aux = palabra.split('');

          aux.forEach((caracter) => caracteres.push(caracter));
        });

        console.log();
        console.log(`-Numero de lineas : ${lineas.length}`);
        console.log(`-Numero de palabras: ${palabras.length}`);
        console.log(`-Numero de lineas : ${caracteres.length}`);
        console.log();
      }
    });
  }
}
