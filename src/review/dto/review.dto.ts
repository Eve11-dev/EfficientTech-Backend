import {IsNotEmpty, IsNumber, IsString}from 'class-validator'; 
export class CreateReviewDto {

    @IsNotEmpty()
    @IsNumber()
    id_product: number;

    @IsString()
    @IsNotEmpty()
    name_product: string;

    @IsNumber()
    @IsNotEmpty()
    calificacion: number;

    @IsString()
    @IsNotEmpty()
    comentario: string;

    @IsNumber()
    @IsNotEmpty()
    fecha_resenia: number;

    @IsString()
    @IsNotEmpty()
    name_user: string;
  
 
}

  