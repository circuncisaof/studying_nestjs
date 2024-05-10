import { Users } from 'src/users/entity/users.entities';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Note' })
export class Note {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column({ name: 'type_treatment', nullable: false })
  type_treatment: string;

  @Column({ name: 'last_consultation', nullable: false })
  last_consultation: string;

  @Column({ name: 'next_consultation', nullable: false })
  next_consultation: string;

  @OneToOne(() => Users, (user) => user.note)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;
  constructor(
    props: {
      type_treatment: string;
      last_consultation: string;
      next_consultation: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id;
  }
}
