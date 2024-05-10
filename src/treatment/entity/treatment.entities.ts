import { Users } from 'src/users/entity/users.entities';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Treatment' })
export class Treatment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column({ name: 'type_treatment', nullable: false })
  type_treatment: string;

  @Column({ name: 'start_in', nullable: false })
  start_in: string;

  @Column({ name: 'complete_in', nullable: false })
  complete_in: string;

  @OneToOne(() => Users, (user) => user.treatment)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;
  constructor(
    props: {
      type_treatment: string;
      start_in: string;
      complete_in: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id;
  }
}
