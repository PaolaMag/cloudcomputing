import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  async getCustomers(): Promise<Customer[]> {
    return await this.customersRepository.find();
  }

  async getCustomer(id: number): Promise<Customer[]> {
    return await this.customersRepository.find({
      select: ['firstname', 'lastname', 'age'],
      where: { id: id },
    });
  }

  async createCustomer(customer: Customer) {
    return this.customersRepository.save(customer);
  }

  async updateCustomer(customer: Customer) {
    return this.customersRepository.save(customer);
  }

  async deleteCustomer(customer: Customer) {
    return this.customersRepository.delete(customer);
  }
}
