import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerRequest, UpdateCustomerRequest } from './customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('/list')
  getCustomers() {
    return this.customerService.listCustomers();
  }

  @Post('/get')
  getCustomer(@Body() id: number) {
    return this.customerService.getCustomer(id);
  }

  @Post('/create')
  createCustomer(@Body() createCustomerRequest: CreateCustomerRequest) {
    return this.customerService.createCustomer(createCustomerRequest);
  }

  @Post('/update')
  updateCustomer(@Body() updateCustomerRequest: UpdateCustomerRequest) {
    return this.customerService.updateCustomer(updateCustomerRequest);
  }

  @Post('/delete')
  deleteCustomer(@Body() id: number) {
    return this.customerService.deleteCustomer(id);
  }
}
