import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProveedoresDto {

    @IsNumber()
    @IsNotEmpty()
    id:number

    @IsString()
    @IsNotEmpty()
    name_proveedor:string

    @IsString()
    @IsNotEmpty()
    direccion:string

    @IsString()
    @IsNotEmpty()
    correo:string

    @IsNumber()
    @IsNotEmpty()
    telefono:number

    @IsNumber()
    @IsNotEmpty()
    precio_productos:number

    @IsString()
    @IsNotEmpty()
    tiempo_entrega:string


}