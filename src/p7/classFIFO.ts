// Clase Fifo. Simula el comportamiento de una cola.

export class Fifo {
  private estructura: any[];

  constructor() {
    this.estructura = [];
  }

  size(): number {
    return this.estructura.length;
  }
}
