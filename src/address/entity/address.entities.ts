import { Users } from 'src/users/entity/users.entities';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Address' })
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column({ name: 'place_public', nullable: false })
  place_public: string;

  @Column({ name: 'number_home', nullable: false })
  number_home: string;

  @Column({ name: 'complement', nullable: false })
  complement: string;

  @Column({ name: 'city', nullable: false })
  city: string;

  @Column({ name: 'state', nullable: false })
  state: string;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @OneToOne(() => Users, (user) => user.address)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;

  constructor(
    props: {
      place_public: string;
      number_home: string;
      complement: string;
      city: string;
      state: string;
      cep: string;
      cell_phone: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id;
  }
}
