class Customer {
  firstname: string;
  lastname: string;
  age: number;
}

export class CreateCustomerEvent {
  constructor(public readonly customer: Customer) {}
}
