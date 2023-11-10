import { IsNotEmpty, IsNumber, IsString, MaxLength, IsBoolean, IsOptional, IsArray, maxLength, isNumber } from 'class-validator';

export class CreateUserDto{

    @IsNotEmpty()
    @IsNumber()
    id: number;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    password: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    sexo: string;

   @IsBoolean()
   @IsOptional()
   active: boolean;

   @IsNumber()
   @IsNotEmpty()
   credit_card: number;

   @IsArray({ each: true })
    @IsString()
    @IsOptional()
    images?: string[];
}