import { Body, Controller, Delete,Get,Param,ParseIntPipe,Patch,Post,} from '@nestjs/common';
  import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/users.dto';
import { LoginUserDto } from '../dto/login-user.dto';

  
  @Controller('users')
  export class UserController {
    constructor(private readonly usersService: UsersService) {}
    @Post()
    async CreateUser(@Body() createUserDto: CreateUserDto) {
      return this.usersService.create(createUserDto);
    }
  
    @Post('login')
    async login(@Body() login: LoginUserDto) {
      return this.usersService.login(login);
    }
  
    @Get()
    findAll() {
      return this.usersService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.remove(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() createUserDto: CreateUserDto,
    ) {
      return this.usersService.update(id, createUserDto);
    }
  }
  