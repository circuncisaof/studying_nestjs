import { PartialType } from '@nestjs/mapped-types';

class _UpdateAddressDto {
  userId?: string;
  place_public: string;
  number_home: string;
  complement: string;
  city: string;
  state: string;
  cep: string;
}
export class UpdateAddressDto extends PartialType(_UpdateAddressDto) {}
