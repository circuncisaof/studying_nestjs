import { PartialType } from '@nestjs/mapped-types';

class _UpdateAddressDto {
  place_public: string;
  number_home: string;
  complement: string;
  city: string;
  state: string;
  cep: string;
  cell_phone: string;
}
export class UpdateAddressDto extends PartialType(_UpdateAddressDto) {}
