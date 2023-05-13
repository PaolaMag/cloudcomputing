import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Customers' })
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  firstname: string;

  @Column({ length: 30 })
  lastname: string;

  @Column()
  age: number;
}
