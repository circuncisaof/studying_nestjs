import { Address } from 'src/address/entity/address.entities';
import { Note } from 'src/note/entity/note.entity';
import { Observation } from 'src/observation/entity/observation.entities';
import { Pharmaceuticals } from 'src/pharmaceuticals/entity/pharmaceuticals.entities';
import { Treatment } from 'src/treatment/entity/treatment.entities';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'cpf', nullable: false })
  cpf: string;

  @Column({ name: 'rg', nullable: false })
  rg: string;

  @Column({ name: 'bith_day', nullable: false })
  bith_day: string;

  @Column({ name: 'age', nullable: false })
  age: string;

  @Column({ name: 'cell_phone', nullable: false })
  cell_phone: string;

  @OneToOne(() => Pharmaceuticals, (pharma) => pharma.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  pharma: Pharmaceuticals;

  @OneToOne(() => Treatment, (treatment) => treatment.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  treatment: Treatment;

  @OneToOne(() => Observation, (observation) => observation.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  observation: Observation;

  @OneToOne(() => Note, (note) => note.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  note: Note;

  @OneToOne(() => Address, (address) => address.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  address: Address;

  constructor(
    props: {
      name: string;
      email: string;
      cpf: string;
      rg: string;
      bith_day: string;
      age: string;
      cell_phone: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id;
  }
}
