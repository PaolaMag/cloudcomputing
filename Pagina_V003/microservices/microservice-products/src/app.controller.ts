import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { EventPattern } from '@nestjs/microservices';
// import { CreateProductEvent } from './create-product.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @EventPattern('product_created')
  // handleUserCreated(data: CreateProductEvent) {
  //   this.appService.handleProductCreated(data);
  // }
}
