import {Controller,Get,Post,Body,Param,Delete,ParseIntPipe,Put,} from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { CreateClienteDto } from '../dto/cliente.dto';
  
  @Controller('cliente')
  export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}
  
    @Post('/')
    async crearCliente(@Body() payload: CreateClienteDto) {
      const newCliente = await this. clienteService.create(payload);
      return newCliente;
    }
  
    @Get('/')
    async getCliente() {
      const cliente = await this.clienteService.getCliente();
      return cliente;
    }
  
    @Get('/:id')
    async getClienteId(@Param('id', ParseIntPipe) id: number) {
      const cliente = await this.clienteService.getClienteId(id);
      return cliente;
    }
  
    @Put('/:id')
    async updatedClients(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: CreateClienteDto,
    ) {
      const metodopago = await this.clienteService.updated(id, payload);
      return metodopago;
    }
  
    @Delete('/:id')
    async deletedCliente(@Param('id', ParseIntPipe) id: number) {
      const cliente = await this.clienteService.delete(id);
      return cliente;
    }
  }
  