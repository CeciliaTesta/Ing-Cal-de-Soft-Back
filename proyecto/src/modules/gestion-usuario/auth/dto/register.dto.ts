import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class RegistrarUsuarioDto {

  @IsEmail({}, { message: 'El correo electrónico debe ser un correo válido' })
  @IsNotEmpty({ message: 'El correo electrónico no puede estar vacío.' })
  mail: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  @IsNotEmpty({ message: 'La contraseña no puede estar vacía.' })
  contrasena: string;

  @IsNumber()
  @IsNotEmpty({ message: 'El ID del rol no puede estar vacío.' })
  rolId: number;

  @IsString()
  @IsNotEmpty({ message: 'La denominación no puede estar vacía.' })
  denominacion: string;
}
