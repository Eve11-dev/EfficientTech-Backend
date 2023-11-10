import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async created(payload: CreateProductDto) {
    const products = await this.productRepository.create(payload);
    return await this.productRepository.save(products);
  }

  async getProduct(): Promise<Product[]> {
    return await this.productRepository.find({ order: { id: 'ASC' } });
  }

  async getProductId(id: number): Promise<Product> {
    const products = await this.productRepository.findOne({
      where: { id },
    });
    return products;
  }

  async updated(id: number, payload: CreateProductDto): Promise<Product> {
    const products = await this.productRepository.findOne({
      where: { id: id },
    });
    this.productRepository.merge(products, payload);
    return await this.productRepository.save(products);
  }

  async delete(id: number): Promise<Product> {
    const products = await this.productRepository.findOne({
      where: { id: id },
    });
    return await this.productRepository.remove(products);
  }
}
