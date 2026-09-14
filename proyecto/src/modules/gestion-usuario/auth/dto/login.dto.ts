import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'El mail no puede estar vacío.' })
  mail: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña no puede estar vacía.' })
  contrasena: string;

  @IsNotEmpty({ message: 'El id de la empresa no puede estar vacío.' })
  @IsNumber()
  empresaId: number;
}