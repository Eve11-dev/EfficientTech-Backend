import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedores } from '../entities/proveedores.entity';
import { CreateProveedoresDto } from '../dto/proveedores.dto';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedores)
    private readonly proveedoresRepository: Repository<Proveedores>,
  ) {}

  async create(payload: CreateProveedoresDto) {
    const proveedores = await this.proveedoresRepository.create(payload);
    return await this.proveedoresRepository.save(proveedores);
  }

  async getProveedores(): Promise<Proveedores[]> {
    return await this.proveedoresRepository.find({ order: { id: 'ASC' } });
  }

  async getProveedoresId(id: number): Promise<Proveedores> {
    const proveedores = await this.proveedoresRepository.findOne({
      where: { id },
    });
    return proveedores;
  }

  async updated(id: number, payload: CreateProveedoresDto): Promise<Proveedores> {
    const proveedores = await this.proveedoresRepository.findOne({
      where: { id: id },
    });
    this.proveedoresRepository.merge(proveedores, payload);
    return await this.proveedoresRepository.save(proveedores);
  }

  async delete(id: number): Promise<Proveedores> {
    const proveedores = await this.proveedoresRepository.findOne({
      where: { id: id },
    });
    return await this.proveedoresRepository.remove(proveedores);
  }
}
