import { CreateAddress } from 'src/address/dto/create-address.dto';
import { NoteDto } from 'src/note/dto/create-note.dto';
import { ObservationDto } from 'src/observation/dto/create-observation.dto';
import { CreatePharmaceuticals } from 'src/pharmaceuticals/dto/create-pharmaceuticals.dto';
import { TreatmentDto } from 'src/treatment/dto/create-treatment.dto';
import { Users } from '../entity/users.entities';

export class ReturnUser {
  name: string;
  email: string;
  id: string;
  cpf: string;
  rg: string;
  bith_day: string;
  age: string;
  cell_phone: string;
  address?: CreateAddress;
  pharma?: CreatePharmaceuticals;
  treatment?: TreatmentDto;
  observation?: ObservationDto;
  note?: NoteDto;

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

    this.pharma = user.pharma;

    this.treatment = user.treatment;

    this.treatment = user.treatment;
    this.observation = user.observation;

    this.note = user.note;
  }
}
