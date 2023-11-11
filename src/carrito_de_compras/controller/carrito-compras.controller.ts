import {Controller,Get,Post,Body,Param,Delete,ParseIntPipe,Put,} from '@nestjs/common';
import { CarritoComprasService } from '../services/carrito-compras.service';
import { CreateCarritoComprasDto } from '../dto/carrito-compras.dto';
  
  @Controller('CarritoCompras')
  export class CarritoComprasController {
    constructor(private readonly carritocomprasService: CarritoComprasService) {}
  
    @Post('/')
    async crearCarritoCompras(@Body() payload: CreateCarritoComprasDto) {
      const newCarritocompras = await this.carritocomprasService.create(payload);
      return newCarritocompras;
    }
  
    @Get('/')
    async getCarritoCompras() {
      const carritocompras = await this.carritocomprasService.getCarritoCompras();
      return carritocompras;
    }
  
    @Get('/:id')
    async getCarritoComprasId(@Param('id', ParseIntPipe) id: number) {
      const carritocompras = await this.carritocomprasService.getCarritoComprasId(id);
      return carritocompras;
    }
  
    @Put('/:id')
    async updatedClients(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: CreateCarritoComprasDto,
    ) {
      const carritocompras = await this.carritocomprasService.updated(id, payload);
      return carritocompras;
    }
  
    @Delete('/:id')
    async deletedCarritoCompras(@Param('id', ParseIntPipe) id: number) {
      const carritocompras = await this.carritocomprasService.delete(id);
      return carritocompras;
    }
  }
  