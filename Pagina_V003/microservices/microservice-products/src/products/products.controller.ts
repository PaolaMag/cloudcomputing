import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @MessagePattern({ role: 'product', cmd: 'list' })
  getProducts() {
    return this.service.getProducts();
  }

  // @Get(':id')
  @MessagePattern({ role: 'product', cmd: 'get' })
  get(@Body() id) {
    return this.service.getProduct(id.id);
  }

  // @Post()
  // @EventPattern('product_created')
  @MessagePattern({ role: 'product', cmd: 'create' })
  create(@Body() product: Product) {
    return this.service.createProduct(product);
  }

  // @Put()
  @MessagePattern({ role: 'product', cmd: 'update' })
  update(@Body() product: Product) {
    return this.service.updateProduct(product);
  }

  // @Delete(':id')
  @MessagePattern({ role: 'product', cmd: 'delete' })
  deleteProduct(@Body() id) {
    return this.service.deleteProduct(id.id);
  }
}
