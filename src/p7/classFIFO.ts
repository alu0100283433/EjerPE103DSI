// Clase Fifo. Simula el comportamiento de una cola.

export class Fifo {
  private estructura: any[];

  constructor() {
    this.estructura = [];
  }

  size(): number {
    return this.estructura.length;
  }

  push(dato: any): void {
    this.estructura.push(dato);
  }

  pseek(): any {
    if (this.estructura.length > 0) {
      return this.estructura[0];
    } else {
      return undefined;
    }
  }

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

  pop(): any {
    return this.estructura.shift();
  }
}
