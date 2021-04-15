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
}
