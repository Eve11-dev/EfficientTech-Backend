import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMetodoPagoDto {

 @IsNumber()
 @IsNotEmpty()
 id: number  

 @IsString()
 @IsNotEmpty()
 forma_de_pago: string

 @IsString()
 @IsNotEmpty()
 moneda: string

 @IsString()
 @IsNotEmpty()
 pais: string

 @IsString()
 @IsNotEmpty()
 description: string
}
