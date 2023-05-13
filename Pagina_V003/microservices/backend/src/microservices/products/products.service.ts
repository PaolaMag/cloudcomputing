import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductRequest, UpdateProductRequest } from './products.dto';
import { CreateProductEvent } from './products.event';

@Injectable()
export class ProductsService {
  private readonly users: any[] = [];

  constructor(
    @Inject('PRODUCTS') private readonly productsClient: ClientProxy,
  ) {}

  listProducts() {
    return this.productsClient.send({ role: 'product', cmd: 'list' }, {});
  }

  getProduct(id: number) {
    return this.productsClient.send({ role: 'product', cmd: 'get' }, id);
  }

  createProduct(createProductRequest: CreateProductRequest) {
    return this.productsClient.send(
      { role: 'product', cmd: 'create' },
      createProductRequest,
    );
  }

  updateProduct(updateProductRequest: UpdateProductRequest) {
    return this.productsClient.send(
      { role: 'product', cmd: 'update' },
      updateProductRequest,
    );
  }

  deleteProduct(id: number) {
    return this.productsClient.send({ role: 'product', cmd: 'delete' }, id);
  }
}
