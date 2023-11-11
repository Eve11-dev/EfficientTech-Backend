import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMetodoPagoDto } from '../dto/metodo_de_pago.dto';
import { MetodoPago } from '../entities/metodo_de_pago.entity';

@Injectable()
export class MetodoPagoService {
  constructor(
    @InjectRepository(MetodoPago)
    private readonly metodopagoRepository: Repository<MetodoPago>,
  ) {}

  async create(payload: CreateMetodoPagoDto) {
    const metodopago = await this.metodopagoRepository.create(payload);
    return await this.metodopagoRepository.save(metodopago);
  }

  async getMetodoPago(): Promise<MetodoPago[]> {
    return await this.metodopagoRepository.find({ order: { id: 'ASC' } });
  }

  async getMetodoPagoId(id: number): Promise<MetodoPago> {
    const metodopago = await this.metodopagoRepository.findOne({
      where: { id },
    });
    return metodopago;
  }

  async updated(id: number, payload: CreateMetodoPagoDto): Promise<MetodoPago> {
    const metodopago = await this.metodopagoRepository.findOne({
      where: { id: id },
    });
    this.metodopagoRepository.merge(metodopago, payload);
    return await this.metodopagoRepository.save(metodopago);
  }

  async delete(id: number): Promise<MetodoPago> {
    const metodopago = await this.metodopagoRepository.findOne({
      where: { id: id },
    });
    return await this.metodopagoRepository.remove(metodopago);
  }
}
