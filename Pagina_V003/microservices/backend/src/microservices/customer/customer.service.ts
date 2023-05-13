import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerRequest, UpdateCustomerRequest } from './customer.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCustomerEvent } from './customer.event';

@Injectable()
export class CustomerService {
  private readonly users: any[] = [];

  constructor(
    @Inject('CUSTOMER') private readonly customerClient: ClientProxy,
  ) {}

  listCustomers() {
    return this.customerClient.send({ role: 'customer', cmd: 'list' }, {});
  }

  getCustomer(id: number) {
    return this.customerClient.send({ role: 'customer', cmd: 'get' }, id);
  }

  createCustomer(createCustomerRequest: CreateCustomerRequest) {
    return this.customerClient.send(
      { role: 'customer', cmd: 'create' },
      createCustomerRequest,
    );
  }

  updateCustomer(updateCustomerRequest: UpdateCustomerRequest) {
    return this.customerClient.send(
      { role: 'customer', cmd: 'update' },
      updateCustomerRequest,
    );
  }

  deleteCustomer(id: number) {
    return this.customerClient.send({ role: 'customer', cmd: 'delete' }, id);
  }
}
