import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoCompras } from './entities/carrito-compras.entity';
import { CarritoComprasController } from './controller/carrito-compras.controller';
import { CarritoComprasService } from './services/carrito-compras.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarritoCompras])],
  controllers: [CarritoComprasController],
  providers: [CarritoComprasService],
})
export class CarritoComprasModule {}
