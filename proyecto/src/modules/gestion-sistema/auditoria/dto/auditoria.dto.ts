import { IsNumber, IsString } from "class-validator";

export class AuditoriaDto {
  @IsNumber({}, { message: 'El ID de la auditoría debe ser un número entero' })
  id: number;
  @IsString({ message: 'El detalle de la auditoría debe ser un texto' })
  detalle: string;
  @IsString({ message: 'El usuario de la auditoría debe ser un texto' })
  createdAt: string;
  @IsString({ message: 'El usuario de la auditoría debe ser un texto' })
  updatedAt: string;
  @IsString({ message: 'El usuario de la auditoría debe ser un texto' })
  deletedAt: string;

  @IsString({ message: 'El usuario de la auditoría debe ser un texto' })
  usuarioCreated: string;
  @IsString({ message: 'El usuario de la auditoría debe ser un texto' })
  usuarioUpdated: string;
  @IsString({ message: 'El usuario de la auditoría debe ser un texto' })
  usuarioDeleted: string;
}
