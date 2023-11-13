import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proveedores } from './entities/proveedores.entity';
import { ProveedoresController } from './controller/proveedores.controller';
import { ProveedoresService } from './services/proveedores.service';


@Module({
  imports: [TypeOrmModule.forFeature([Proveedores])],
  controllers: [ProveedoresController],
  providers: [ProveedoresService],
})
export class ProveedoresModule {}
