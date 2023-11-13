import {Controller,Get,Post,Body,Param,Delete,ParseIntPipe,Put,} from '@nestjs/common';
import { ProveedoresService } from '../services/proveedores.service';
import { CreateProveedoresDto } from '../dto/proveedores.dto';

  @Controller('Proveedores')
  export class ProveedoresController {
    constructor(private readonly proveedoresService: ProveedoresService) {}
  
    @Post('/')
    async crearProveedores(@Body() payload: CreateProveedoresDto) {
      const newProveedores = await this.proveedoresService.create(payload);
      return newProveedores;
    }
  
    @Get('/')
    async getProveedores() {
      const proveedores = await this.proveedoresService.getProveedores();
      return proveedores;
    }
  
    @Get('/:id')
    async getProveedoresId(@Param('id', ParseIntPipe) id: number) {
      const proveedores = await this.proveedoresService.getProveedoresId(id);
      return proveedores;
    }
  
    @Put('/:id')
    async updatedClients(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: CreateProveedoresDto,
    ) {
      const proveedores = await this.proveedoresService.updated(id, payload);
      return proveedores;
    }
  
    @Delete('/:id')
    async deletedProveedores(@Param('id', ParseIntPipe) id: number) {
      const proveedores = await this.proveedoresService.delete(id);
      return proveedores;
    }
  }
  