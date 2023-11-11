import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/product.module';
import { ReviewModule } from './review/review.module';
import { OrderModule } from './order/order.module';
import { MetodoPagoModule } from './metodo_de_pago/metodo_de_pago.module';
import { CategoryModule } from './category/category.module';
import { CarritoComprasModule } from './carrito_de_compras/carrito_compras.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Ec915810',
      database: 'EfficientTech',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    UsersModule,
    ProductsModule,
    ReviewModule,
    OrderModule,
    MetodoPagoModule,
    CategoryModule,
    CarritoComprasModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}