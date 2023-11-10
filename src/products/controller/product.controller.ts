import {Controller,Get,Post,Body,Patch,Param,Delete,ParseIntPipe,Put} from '@nestjs/common';
import { ProductsService } from '../services/product.service';
import { CreateProductDto } from '../dto/product.dto';
  
  @Controller('products')
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    @Post('/')
    async createClients(@Body() payload: CreateProductDto) {
      const newProduct = await this.productsService.created(payload);
      return newProduct;
    }
  
    @Get('/')
    async getProduct() {
      const product = await this.productsService.getProduct();
      return product;
    }
  
    @Get('/:id')
    async getProductId(@Param('id', ParseIntPipe) id: number) {
      const product = await this.productsService.getProductId(id);
      return product;
    }
  
    @Put('/:id')
    async updatedProduct(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: CreateProductDto,
    ) {
      const product = await this.productsService.updated(id, payload);
      return product;
    }
  
    @Delete('/:id')
    async deletedProducts(@Param('id', ParseIntPipe) id: number) {
      const product = await this.productsService.delete(id);
      return product;
    }
  }
  