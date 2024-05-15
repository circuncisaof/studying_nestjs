import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateAddress } from 'src/address/dto/create-address.dto';
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

  @IsString()
  address?: CreateAddress;

  @IsString()
  password: string;
}
export class UpdateUsersDto extends PartialType(_UpdateUserDto) {}
