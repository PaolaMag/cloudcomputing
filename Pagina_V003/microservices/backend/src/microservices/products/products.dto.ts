export class CreateProductRequest {
  name: string;
  description: string;
  quantity: number;
}

export class UpdateProductRequest {
  id: string;
  name: string;
  description: string;
  quantity: number;
}
