type CustomerType = {
  firstname: string;
  lastname: string;
  age: number;
};

export class CreateCustomerEvent {
  constructor(public readonly customer: CustomerType) {}
}
