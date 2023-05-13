import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrabajadoresService } from './trabajadores.service';
import {
  CreateTrabajadoresRequest,
  UpdateTrabajadoresRequest,
} from './trabajadores.dto';

@Controller('trabajadores')
export class TrabajadoresController {
  constructor(private readonly trabajadoresService: TrabajadoresService) {}

  @Get('/list')
  getTrabajadores() {
    return this.trabajadoresService.listTrabajadores();
  }

  @Post('/get')
  getTrabajador(@Body() id: number) {
    return this.trabajadoresService.getTrabajadores(id);
  }

  @Post('/create')
  createTrabajadores(
    @Body() createTrabajadoresRequest: CreateTrabajadoresRequest,
  ) {
    return this.trabajadoresService.createTrabajadores(
      createTrabajadoresRequest,
    );
  }

  @Post('/update')
  updateTrabajadores(
    @Body() updateTrabajadoresRequest: UpdateTrabajadoresRequest,
  ) {
    return this.trabajadoresService.updateTrabajadores(
      updateTrabajadoresRequest,
    );
  }

  @Post('/delete')
  deleteTrabajadores(@Body() id: number) {
    return this.trabajadoresService.deleteTrabajadores(id);
  }
}
