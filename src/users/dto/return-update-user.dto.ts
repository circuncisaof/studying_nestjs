import { CreateAddress } from 'src/address/dto/create-address.dto';
import { Users } from '../entity/users.entities';

export class ReturnUpdateUser {
  name: string;
  email: string;
  id: string;
  cpf: string;
  rg: string;
  bith_day: string;
  age: string;
  cell_phone: string;
  address?: CreateAddress;
  constructor(user: Users) {
    this.name = user.name;
    this.email = user.email;
    this.id = user.id;
    this.cpf = user.cpf;
    this.rg = user.rg;
    this.bith_day = user.bith_day;
    this.age = user.age;
    this.cell_phone = user.cell_phone;
    this.address = user.address;
  }
}
