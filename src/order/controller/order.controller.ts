import {Controller,Get,Post,Body,Patch,Param,Delete,ParseIntPipe,Put,} from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { CreateOrderDto } from '../dto/order.dto';
  
  @Controller('order')
  export class OrderController {
    constructor(private readonly orderService: OrderService) {}
  
    @Post('/')
    async crearOrder(@Body() payload: CreateOrderDto) {
      const newOrder = await this.orderService.create(payload);
      return newOrder;
    }
  
    @Get('/')
    async getOrder() {
      const order = await this.orderService.getOrder();
      return order;
    }
  
    @Get('/:id')
    async getOrderId(@Param('id', ParseIntPipe) id: number) {
      const order = await this.orderService.getOrderId(id);
      return order;
    }
  
    @Put('/:id')
    async updatedClients(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: CreateOrderDto,
    ) {
      const order = await this.orderService.updated(id, payload);
      return order;
    }
  
    @Delete('/:id')
    async deletedOrder(@Param('id', ParseIntPipe) id: number) {
      const order = await this.orderService.delete(id);
      return order;
    }
  }
  