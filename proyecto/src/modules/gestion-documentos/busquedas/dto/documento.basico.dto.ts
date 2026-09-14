import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class DocumentoBasicoDto {
  @IsOptional()
  @IsNumber({}, { message: 'El id debe ser un número' })
  @IsPositive({ message: 'El id debe ser un valor positivo' })
  id?: number;

  @IsOptional()
  @IsString({ message: 'El documento debe ser un texto' })
  @IsNotEmpty({ message: 'Si se envía, el documento no puede estar vacío' })
  documento?: string;
}