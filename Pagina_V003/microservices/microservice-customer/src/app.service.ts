import { Injectable } from '@nestjs/common';
import { CreateCustomerEvent } from './create-customer.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateCustomerEvent) {
    console.log('handleUserCreated - CUSTOMER', data);
  }
}
