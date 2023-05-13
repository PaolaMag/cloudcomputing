import { Injectable } from '@nestjs/common';
import { CreateTrabajadoresEvent } from './create-trabajadores.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateTrabajadoresEvent) {
    console.log('handleUserCreated - TRABAJADORES', data);
  }
}
