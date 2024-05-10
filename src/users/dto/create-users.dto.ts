import { IsString } from 'class-validator';

export class CreateDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  id: string;

  @IsString()
  cpf: string;

  @IsString()
  rg: string;

  @IsString()
  bith_day: string;

  @IsString()
  age: string;

  @IsString()
  cell_phone: string;
}
