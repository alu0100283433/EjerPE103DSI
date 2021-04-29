import 'mocha';
import {expect} from 'chai';

import {CalculaLineasPalabrasCaracteres} from '../../src/p9/ejercicio3';

describe('bloque clase CalculaLineasPalabrasCaractes', () => {
  const calculador = new CalculaLineasPalabrasCaracteres();

  const cadenaVerificar = 'ddd\n34 45 56';

  it('Probando método calcular', () => {
    expect(calculador.calcular(cadenaVerificar)).eql([2, 4, 9]);
  });
});
