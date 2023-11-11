import {Controller,Get,Post,Body,Param,Delete,ParseIntPipe,Put,} from '@nestjs/common';
import { MetodoPagoService } from '../services/metodo_de_pago.service';
import { CreateMetodoPagoDto } from '../dto/metodo_de_pago.dto';
  
  @Controller('metodo_de_pago')
  export class MetodoPagoController {
    constructor(private readonly metodopagoService: MetodoPagoService) {}
  
    @Post('/')
    async crearMetodPago(@Body() payload: CreateMetodoPagoDto) {
      const newMetodoPago = await this.metodopagoService.create(payload);
      return newMetodoPago;
    }
  
    @Get('/')
    async getMetodoPago() {
      const metodopago = await this.metodopagoService.getMetodoPago();
      return metodopago;
    }
  
    @Get('/:id')
    async getMetodoPagoId(@Param('id', ParseIntPipe) id: number) {
      const metodpago = await this.metodopagoService.getMetodoPagoId(id);
      return metodpago;
    }
  
    @Put('/:id')
    async updatedClients(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: CreateMetodoPagoDto,
    ) {
      const metodopago = await this.metodopagoService.updated(id, payload);
      return metodopago;
    }
  
    @Delete('/:id')
    async deletedMetodoPago(@Param('id', ParseIntPipe) id: number) {
      const metodopago = await this.metodopagoService.delete(id);
      return metodopago;
    }
  }
  