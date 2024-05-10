import { Users } from 'src/users/entity/users.entities';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Observation' })
export class Observation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column({ name: 'observation', nullable: false })
  observation: string;

  @OneToOne(() => Users, (user) => user.observation)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;

  constructor(
    props: {
      observation: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id;
  }
}
