import 'mocha';
import {expect} from 'chai';

import {Fifo} from '../../src/p7/classFIFO';

describe('bloque tests clase Fifo', () => {
  // Mmmm, ¿Simular una cola con un Array de tipo Any?

  const cola = new Fifo();
  const cola2 = new Fifo();
  const cola3 = new Fifo();

  it('- Nº de elementos de la cola actualmente es 0', () => {
    expect(cola.size()).to.be.equal(0);
  });

  it('- Con un push() ahora la cola tiene tamaño 1', () => {
    cola.push(3);

    expect(cola.size()).to.be.equal(1);
  });

  it('- pseek() sobre una cola "Perro"|"Vaca"|"Gato" devuelve "Perro"', () => {
    cola2.push('Perro');
    cola2.push('Vaca');
    cola2.push('Gato');

    expect(cola2.pseek()).to.be.equal('Perro');
    expect(cola3.pseek()).to.be.equal(undefined);
  });
});
