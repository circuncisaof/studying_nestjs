import { Address } from 'src/address/entity/address.entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class users {
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
  @Column({ name: 'password', nullable: false })
  password: string;

  @OneToOne(() => Address, (address) => address.user)
  address: Address;
  @CreateDateColumn({ name: 'create_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'update_at' })
  updated_at: Date;

  constructor(
    props: {
      name: string;
      email: string;
      cpf: string;
      rg: string;
      bith_day: string;
      age: string;
      cell_phone: string;
      created_at: Date;
      updated_at: Date;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id;
  }
}
