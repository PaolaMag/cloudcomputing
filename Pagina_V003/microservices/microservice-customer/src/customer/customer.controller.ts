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
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(private service: CustomerService) {}

  @MessagePattern({ role: 'customer', cmd: 'list' })
  getCustomers() {
    return this.service.getCustomers();
  }

  // @Get(':id')
  @MessagePattern({ role: 'customer', cmd: 'get' })
  get(@Body() id) {
    return this.service.getCustomer(id.id);
  }

  // @Post()
  @MessagePattern({ role: 'customer', cmd: 'create' })
  create(@Body() customer: Customer) {
    return this.service.createCustomer(customer);
  }

  // @Put()
  @MessagePattern({ role: 'customer', cmd: 'update' })
  update(@Body() customer: Customer) {
    return this.service.updateCustomer(customer);
  }

  // @Delete(':id')
  @MessagePattern({ role: 'customer', cmd: 'delete' })
  delete(@Body() id) {
    return this.service.deleteCustomer(id.id);
  }
}
