import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateClienteDto {

    @IsNumber()
    @IsNotEmpty()
    id: number 

    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    correo:string

    @IsString()
    @IsNotEmpty()
    direccion:string

    @IsNumber()
    @IsNotEmpty()
    telefono:number

}