// Ejercicio 3. Muestre por pantalla aquel fichero que contiene más caracteres.

import * as fs from 'fs';

// Sólo hice la clase siguiente para tener algo que testear ya que no usé
// en el resto funciones ni clases

/**
 * Una clase que calcula el número de líneas, palabras y caracteres de un
 * string.
 */
export class CalculaLineasPalabrasCaracteres {
  constructor() {}

  /**
   * El método que se usa para calcular el número de líneas, palabras y 
   * caracteres de un string.
   * @param contenido Un string a calcular
   * @returns Un array con 3 números : El primero el número de líneas, el
   * segundo el número de palabras y tercero el número de caracteres.
   */
  calcular(contenido: string): [number, number, number] {
    // Cálculo de líneas, palabras y caracteres a lo bruto.
    const lineas = contenido.split('\n');
    const palabras: string[] = [];
    const caracteres: string[] = [];

    lineas.forEach((linea) => {
      const aux = linea.split(' ');

      aux.forEach((palabra) => palabras.push(palabra));
    });

    palabras.forEach((palabra) => {
      const aux = palabra.split('');

      aux.forEach((caracter) => caracteres.push(caracter));
    });

    return [lineas.length, palabras.length, caracteres.length];
  }
}

/**
 * Código para detectar los ficheros de un directorio, abrirlos, contar
 * su número de caracteres y mostrar sólo el que tenga mayour número de ellos.
 */
if (process.argv.length !== 3) {
  console.log('Please, specify a directory');
} else {
  const dirname = process.argv[2];

  if (!fs.existsSync(dirname)) {
    console.log('The directory does not exists.');
  } else {
    let ficheroCaracteres: [[string, number]];
    const ficheros: string[] = [];
    const caracteres: number[] = [];

    // -> Leyendo (el contenido de) un directorio.
    // La opción "withFileTypes" nos permite devolver un Json de cada elemento
    // de un directorio con información extra para el paso siguiente.
    const contenidoDirectorio = fs.readdirSync(dirname, {withFileTypes: true});

    contenidoDirectorio.forEach((elemento) => {
      // Esta línea sirve para que sólo muestre los ficheros, no los directorios
      // que pudieran estar dentro del directorio especificado.
      if (elemento.isFile()) {
        const contenidoFichero = fs.readFileSync(`${dirname}/${elemento.name}`);


        const textoFichero = contenidoFichero.toString();


        // Cálculo de líneas, palabras y caracteres a lo bruto.
        const calculador = new CalculaLineasPalabrasCaracteres();

        const numeros = calculador.calcular(textoFichero);

        ficheros.push(elemento.name);
        caracteres.push(numeros[2]);
      }
    });
    console.log('Fichero con mas caracteres');
    const max = Math.max(...caracteres);
    const index = caracteres.indexOf(max);
    const contenidoFichero = fs.readFileSync(`${dirname}/${ficheros[index]}`);
    const textoFichero = contenidoFichero.toString();
    console.log(`Nombre : ${ficheros[index]}`);
    console.log('Contenido: ');
    console.log();
    console.log(textoFichero);
    console.log();
    console.log(`Caracteres: ${max}`);
  }
}
