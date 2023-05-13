import { Inject, Injectable } from '@nestjs/common';
import {
  CreateTrabajadoresRequest,
  UpdateTrabajadoresRequest,
} from './trabajadores.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTrabajadoresEvent } from './trabajadores.event';

@Injectable()
export class TrabajadoresService {
  private readonly users: any[] = [];

  constructor(
    @Inject('TRABAJADORES') private readonly trabajadoresClient: ClientProxy,
  ) {}

  listTrabajadores() {
    return this.trabajadoresClient.send(
      { role: 'trabajadores', cmd: 'list' },
      {},
    );
  }

  getTrabajador(id: number) {
    return this.trabajadoresClient.send(
      { role: 'trabajadores', cmd: 'get' },
      id,
    );
  }

  createTrabajadores(createTrabajadoresRequest: CreateTrabajadoresRequest) {
    return this.trabajadoresClient.send(
      { role: 'trabajadores', cmd: 'create' },
      createTrabajadoresRequest,
    );
  }

  updateTrabajadores(updateTrabajadoresRequest: UpdateTrabajadoresRequest) {
    return this.trabajadoresClient.send(
      { role: 'trabajadores', cmd: 'update' },
      updateTrabajadoresRequest,
    );
  }

  deleteTrabajadores(id: number) {
    return this.trabajadoresClient.send(
      { role: 'customer', cmd: 'delete' },
      id,
    );
  }
}
