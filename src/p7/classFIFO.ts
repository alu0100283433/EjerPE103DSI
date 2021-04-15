// Clase Fifo. Simula el comportamiento de una cola.

/**
 * Clase que simula una estructura tipo FIFO. Simulando el comportamiento de
 * una cola (Queue).
 * @class
 */
export class Fifo {
  /**
   * Una estructura tipo Array que simulará una cola con los métodos provistos
   * de la clase.
   * @private, @member
   */
  private estructura: any[];

  constructor() {
    this.estructura = [];
  }

  /**
   * Calcula el tamaño de la estructura FIFO, de cuantos elementos la componen.
   * @returns Un _number_ que representa el número de elementos la estrutura
   * FIFO:
   */
  size(): number {
    return this.estructura.length;
  }

  /**
   * Añade un elemento nuevo a la estructura FIFO. Los nuevos elementos añadidos
   * serán insertados/colocados al final de la estructura.
   * @param dato El tipo de dato que se insertará en la estructura.
   */
  push(dato: any): void {
    this.estructura.push(dato);
  }

  /**
   * Devuelve el dato que se encuentra en la primera posición de la estructura
   * FIFO, llamada _Cabeza_ o _HEAD_. Pero **no lo extrae**.
   * @returns El dato que se encuentra en la primera posición de la estructura,
   * en la _Cabeza_ de la misma.
   */
  pseek(): any {
    if (this.estructura.length > 0) {
      return this.estructura[0];
    } else {
      return undefined;
    }
  }

  /**
   * Devuelve una cadena formateada con la estructura interna del FIFO. El
   * primer elemento va acompañado del texto _**(H)**_, indicando que es la
   * _Cabeza_ o _HEAD_ de la estructura, en cambio el último elemento le
   * acompaña un _**(T)**_ de _Cola/Tail_. Los elementos van separados por
   * _**->**_
   * @returns Una cadena formateada con la estructura del FIFO.
   */
  print(): string {
    let resultado: string = '';
    const cabeza = 0;
    const cola = this.estructura.length;

    if (this.estructura.length > 0) {
      for (let i = 0; i < cola; ++i) {
        resultado += this.estructura[i];

        if (i == cabeza) {
          resultado += '(H)';
        }

        if (i == cola - 1) {
          resultado += '(T)';
        }

        if (i < cola - 1) {
          resultado += '->';
        }
      }
    }

    return resultado;
  }

  /**
   * Extrae el primer elemento (la _Cabeza_ o _HEAD_) del FIFO/Cola y devuelve
   * su valor
   * @returns El valor extraido de la primera posicioón del FIFO.
   */
  pop(): any {
    return this.estructura.shift();
  }
}
