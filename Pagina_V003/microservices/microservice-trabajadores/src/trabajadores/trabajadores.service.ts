import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trabajadores } from './trabajadores.entity';

@Injectable()
export class TrabajadoresService {
  constructor(
    @InjectRepository(Trabajadores)
    private trabajadoresRepository: Repository<Trabajadores>,
  ) {}

  async getTrabajadores(): Promise<Trabajadores[]> {
    return await this.trabajadoresRepository.find();
  }

  async getTrabajador(id: number): Promise<Trabajadores[]> {
    return await this.trabajadoresRepository.find({
      select: ['firstname', 'lastname', 'age'],
      where: { id: id },
    });
  }

  async createTrabajadores(trabajadores: Trabajadores) {
    return this.trabajadoresRepository.save(trabajadores);
  }

  async updateTrabajadores(trabajadores: Trabajadores) {
    return this.trabajadoresRepository.save(trabajadores);
  }

  async deleteTrabajadores(trabajadores: Trabajadores) {
    return this.trabajadoresRepository.delete(trabajadores);
  }
}
