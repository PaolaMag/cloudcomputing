import { Injectable } from '@nestjs/common';
import { CreateProductEvent } from './create-product.event';

@Injectable()
export class AppService {
  // private readonly products: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleProductCreated(data: CreateProductEvent) {
    console.log('handleProductCreated - CREATE', data);
    // this.products.push({
    //   timestamp: new Date(),
    // });
  }
}
