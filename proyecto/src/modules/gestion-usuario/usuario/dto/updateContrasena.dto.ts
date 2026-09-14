import { Type } from "class-transformer";
import { IsNumber, IsString, MinLength } from "class-validator";

export class UpdateContrasenaDto {


  @IsString({ message: 'La contraseña actual debe ser un texto y contener mas de 8 caracteres' })
  contrasenaActual: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña nueva debe tener al menos 8 caracteres y ser un texto' })
  contrasenaNueva: string;

  @IsString({ message: 'La confirmación de la contraseña debe ser un texto y contener mas de 8 caracteres' })
  confirmarContrasena: string;
}