import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dto/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create(payload: CreateOrderDto) {
    const order = await this.orderRepository.create(payload);
    return await this.orderRepository.save(order);
  }

  async getOrder(): Promise<Order[]> {
    return await this.orderRepository.find({ order: { id: 'ASC' } });
  }

  async getOrderId(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id },
    });
    return order;
  }

  async updated(id: number, payload: CreateOrderDto): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id: id },
    });
    this.orderRepository.merge(order, payload);
    return await this.orderRepository.save(order);
  }

  async delete(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id: id },
    });
    return await this.orderRepository.remove(order);
  }
}
