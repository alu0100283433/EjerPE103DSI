import 'mocha';
import {expect} from 'chai';

import {Fifo} from '../../src/p7/classFIFO';

describe('bloque tests clase Fifo', () => {
  // Mmmm, ¿Simular una cola con un Array de tipo Any?

  const cola = new Fifo();

  it('- Nº de elementos de la cola actualmente es 0', () => {
    expect(cola.size()).to.be.equal(0);
  });

  it('- Con un push() ahora la cola tiene tamaño 1', () => {
    cola.push(3);

    expect(cola.size()).to.be.equal(1);
  });
});
