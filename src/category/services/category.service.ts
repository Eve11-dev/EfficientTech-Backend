import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from '../dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(payload: CreateCategoryDto) {
    const category = await this.categoryRepository.create(payload);
    return await this.categoryRepository.save(category);
  }

  async getCategory(): Promise<Category[]> {
    return await this.categoryRepository.find({ order: { id: 'ASC' } });
  }

  async getCategoryId(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });
    return category;
  }

  async updated(id: number, payload: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id: id },
    });
    this.categoryRepository.merge(category, payload);
    return await this.categoryRepository.save(category);
  }

  async delete(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id: id },
    });
    return await this.categoryRepository.remove(category);
  }
}
