// Ejercicio1. Implemente un programa que muestre por pantalla los nombre de
// los archivos almacenados en un directorio en concreto.

import * as fs from 'fs';

/**
 * Código para detectar los ficheros de un directorio y mostrar sus nombres.
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
      if (elemento.isFile()) console.log(elemento.name);
    });
  }
}
