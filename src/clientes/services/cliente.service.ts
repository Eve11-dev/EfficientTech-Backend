import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dto/cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(payload: CreateClienteDto) {
    const cliente = await this.clienteRepository.create(payload);
    return await this.clienteRepository.save(cliente);
  }

  async getCliente(): Promise<Cliente[]> {
    return await this.clienteRepository.find({ order: { id: 'ASC' } });
  }

  async getClienteId(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { id },
    });
    return cliente;
  }

  async updated(id: number, payload: CreateClienteDto): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { id: id },
    });
    this.clienteRepository.merge(cliente, payload);
    return await this.clienteRepository.save(cliente);
  }

  async delete(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { id: id },
    });
    return await this.clienteRepository.remove(cliente);
  }
}
