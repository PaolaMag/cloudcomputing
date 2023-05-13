import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async getProduct(id: number): Promise<Product[]> {
    return await this.productsRepository.find({
      select: ['name', 'description', 'quantity'],
      where: { id: id },
    });
  }

  async createProduct(product: Product) {
    return this.productsRepository.save(product);
  }

  async updateProduct(product: Product) {
    return this.productsRepository.save(product);
  }

  async deleteProduct(product: Product) {
    return this.productsRepository.delete(product);
  }
}
