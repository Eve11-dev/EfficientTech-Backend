import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { UserController } from './controller/users.controller';
import { User } from './entities/users.entity';
import { UserImage } from './entities/user.image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserImage])],
  controllers: [UserController],
  providers: [UsersService],
  exports: [TypeOrmModule, UsersModule],
})
export class UsersModule {}
