import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {
  CustomerController,
  CustomerService,
  ProductsController,
  ProductsService,
  TrabajadoresController,
  TrabajadoresService,
} from './microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CUSTOMER',
        transport: Transport.TCP,
        options: {
          // host:'127.0.0.1',
          host: 'microservice-customer',
          port: 5001,
        },
      },
      {
        name: 'PRODUCTS',
        transport: Transport.TCP,
        options: {
          // host:'127.0.0.1',
          host: 'microservice-products',
          port: 5002,
        },
      },
      {
        name: 'TRABAJADORES',
        transport: Transport.TCP,
        options: {
          // host:'127.0.0.1',
          host: 'microservice-products',
          port: 5003,
        },
      },
    ]),
  ],
  controllers: [
    AppController,
    CustomerController,
    ProductsController,
    TrabajadoresController,
  ],
  providers: [
    AppService,
    CustomerService,
    ProductsService,
    TrabajadoresService,
  ],
})
export class AppModule {}
