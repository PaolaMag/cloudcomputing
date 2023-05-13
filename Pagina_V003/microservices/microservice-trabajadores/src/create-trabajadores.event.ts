class Trabajadores {
  firstname: string;
  lastname: string;
  age: number;
}

export class CreateTrabajadoresEvent {
  constructor(public readonly trabajadores: Trabajadores) {}
}
