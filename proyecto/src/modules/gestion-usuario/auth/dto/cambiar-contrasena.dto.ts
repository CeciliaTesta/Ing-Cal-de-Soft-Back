import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CambiarContrasenaDto {
  @IsEmail({}, { message: 'El correo electrónico debe ser un correo válido' })
  mail: string;

  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  nuevaContrasena: string;
}