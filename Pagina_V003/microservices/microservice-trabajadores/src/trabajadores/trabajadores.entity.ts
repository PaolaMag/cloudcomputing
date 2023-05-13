import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Trabajadores' })
export class Trabajadores {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  firstname: string;

  @Column({ length: 30 })
  lastname: string;

  @Column()
  age: number;
}
