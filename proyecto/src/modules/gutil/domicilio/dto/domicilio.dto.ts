import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class DomicilioDto {
    @ApiProperty({
    description: 'ID del domicilio.',
    })
    id: number;

    @IsString({ message: 'La dirección debe ser un texto' })
    direccion: string;
  
    @IsInt()
    @Type(() => Number)
    localidadId: number;
   
    @IsString({ message: 'La localidad debe ser un texto' })
    localidad: string;

    @IsInt()
    @Type(() => Number)
    provinciaId: number;
   
    @IsString({ message: 'La provincia debe ser un texto' })
    provincia: string;

}
