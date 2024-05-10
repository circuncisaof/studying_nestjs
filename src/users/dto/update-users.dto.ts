import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

class _UpdateUserDto {
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
export class UpdateUsersDto extends PartialType(_UpdateUserDto) {}
