import {IsNotEmpty,IsNumber,IsString,IsPositive,IsDateString,} from 'class-validator';
  
  export class CreateProductDto {
    @IsNumber()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    nombre: string;
  
    @IsNotEmpty()
    @IsString()
    descripcion: string;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    precio: number;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    stock: number;
  
    @IsNotEmpty()
    @IsString()
    imagen: string;
  
    @IsNotEmpty()
    @IsString()
    categoria: string;
  
    @IsNotEmpty()
    @IsDateString()
    fechaCreacion: Date;
  
    @IsNotEmpty()
    @IsDateString()
    fechaActualizacion: Date;
  }
  