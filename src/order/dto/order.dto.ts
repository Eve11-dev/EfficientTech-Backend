import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateOrderDto {

  @IsNotEmpty() 
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsDate()
  fecha: Date;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  direccion: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  ciudad: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  pais: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  codigo_Postal: string;
}
