import { Address } from '../entity/address.entities';

export class ReturnAddressDto {
  place_public: string;
  number_home: string;
  complement: string;
  city: string;
  state: string;
  cep: string;

  constructor(address: Address) {
    this.place_public = address.place_public;
    this.complement = address.complement;
    this.number_home = address.number_home;
    this.city = address.city;
    this.state = address.state;
    this.cep = address.cep;
  }
}
