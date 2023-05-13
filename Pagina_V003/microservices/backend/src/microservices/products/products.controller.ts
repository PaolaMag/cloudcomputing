import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductRequest, UpdateProductRequest } from './products.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/list')
  getProducts() {
    return this.productService.listProducts();
  }

  @Post('/get')
  getProduct(@Body() id: number) {
    return this.productService.getProduct(id);
  }

  @Post('/create')
  createProduct(@Body() createProductRequest: CreateProductRequest) {
    return this.productService.createProduct(createProductRequest);
  }

  @Post('/update')
  updateProduct(@Body() updateProductRequest: UpdateProductRequest) {
    return this.productService.updateProduct(updateProductRequest);
  }

  @Post('/delete')
  deleteProduct(@Body() id: number) {
    return this.productService.deleteProduct(id);
  }
}
