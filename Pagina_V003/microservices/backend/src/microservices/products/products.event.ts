type ProductType = {
  name: string;
  description: string;
  quantity: number;
};

export class CreateProductEvent {
  constructor(public readonly product: ProductType) {}
}
