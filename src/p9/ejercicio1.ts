import * as fs from 'fs';

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
      if (elemento.isFile()) console.log(elemento.name);
    });
  }
}
