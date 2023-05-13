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
import { TrabajadoresService } from './trabajadores.service';
import { Trabajadores } from './trabajadores.entity';

@Controller('trabajadores')
export class TrabajadoresController {
  constructor(private service: TrabajadoresService) {}

  @MessagePattern({ role: 'trabajadores', cmd: 'list' })
  getCustomers() {
    return this.service.getTrabajadores();
  }

  // @Get(':id')
  @MessagePattern({ role: 'trabajadores', cmd: 'get' })
  get(@Body() id) {
    return this.service.getTrabajador(id.id);
  }

  // @Post()
  @MessagePattern({ role: 'trabajadores', cmd: 'create' })
  create(@Body() trabajadores: Trabajadores) {
    return this.service.createTrabajadores(trabajadores);
  }

  // @Put()
  @MessagePattern({ role: 'trabajadores', cmd: 'update' })
  update(@Body() trabajadores: Trabajadores) {
    return this.service.updateTrabajadores(trabajadores);
  }

  // @Delete(':id')
  @MessagePattern({ role: 'trabajadores', cmd: 'delete' })
  delete(@Body() id) {
    return this.service.deleteTrabajadores(id.id);
  }
}
