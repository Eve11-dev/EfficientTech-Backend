import {Controller,Get,Post,Body,Param,Delete,ParseIntPipe,Put,} from '@nestjs/common';
import { CreateCategoryDto } from '../dto/category.dto';
import { CategoryService } from '../services/category.service';
  
  @Controller('Category')
  export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
  
    @Post('/')
    async crearCategory(@Body() payload: CreateCategoryDto) {
      const newCategory = await this.categoryService.create(payload);
      return newCategory;
    }
  
    @Get('/')
    async getCategory() {
      const category = await this.categoryService.getCategory();
      return category;
    }
  
    @Get('/:id')
    async getCategoryId(@Param('id', ParseIntPipe) id: number) {
      const category = await this.categoryService.getCategoryId(id);
      return category;
    }
  
    @Put('/:id')
    async updatedClients(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: CreateCategoryDto,
    ) {
      const category = await this.categoryService.updated(id, payload);
      return category;
    }
  
    @Delete('/:id')
    async deletedCategory(@Param('id', ParseIntPipe) id: number) {
      const category = await this.categoryService.delete(id);
      return category;
    }
  }
  