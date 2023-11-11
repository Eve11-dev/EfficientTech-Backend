import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarritoComprasDto } from '../dto/carrito-compras.dto';
import { CarritoCompras } from '../entities/carrito-compras.entity';

@Injectable()
export class CarritoComprasService {
  constructor(
    @InjectRepository(CarritoCompras)
    private readonly carritocomprasRepository: Repository<CarritoCompras>,
  ) {}

  async create(payload: CreateCarritoComprasDto) {
    const carritocompras = await this.carritocomprasRepository.create(payload);
    return await this.carritocomprasRepository.save(carritocompras);
  }

  async getCarritoCompras(): Promise<CarritoCompras[]> {
    return await this.carritocomprasRepository.find({ order: { id: 'ASC' } });
  }

  async getCarritoComprasId(id: number): Promise<CarritoCompras> {
    const carritocompras = await this.carritocomprasRepository.findOne({
      where: { id },
    });
    return carritocompras;
  }

  async updated(id: number, payload: CreateCarritoComprasDto): Promise<CarritoCompras> {
    const carritocompras = await this.carritocomprasRepository.findOne({
      where: { id: id },
    });
    this.carritocomprasRepository.merge(carritocompras, payload);
    return await this.carritocomprasRepository.save(carritocompras);
  }

  async delete(id: number): Promise<CarritoCompras> {
    const carritocompras = await this.carritocomprasRepository.findOne({
      where: { id: id },
    });
    return await this.carritocomprasRepository.remove(carritocompras);
  }
}
