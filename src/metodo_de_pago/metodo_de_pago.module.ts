import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPagoController } from './controller/metodo_de_pago.controller';
import { MetodoPagoService } from './services/metodo_de_pago.service';
import { MetodoPago } from './entities/metodo_de_pago.entity';


@Module({
  imports: [TypeOrmModule.forFeature([MetodoPago])],
  controllers: [MetodoPagoController],
  providers: [MetodoPagoService],
})
export class MetodoPagoModule {}
