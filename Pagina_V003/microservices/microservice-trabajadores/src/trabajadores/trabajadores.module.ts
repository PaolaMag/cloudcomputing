import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrabajadoresService } from './trabajadores.service';
import { TrabajadoresController } from './trabajadores.controller';
import { Trabajadores } from './trabajadores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trabajadores])],
  providers: [TrabajadoresService],
  controllers: [TrabajadoresController],
})
export class TrabajadoresModule {}
