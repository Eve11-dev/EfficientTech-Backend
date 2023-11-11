import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateCarritoComprasDto {

    @IsNumber()
    @IsNotEmpty()
    id: number  

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(300)
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(300)
    product_id: number;

    @IsString()
    @IsNotEmpty()
    direccion: string

    @IsNumber()
    @IsNotEmpty()
    cant_product: number

}