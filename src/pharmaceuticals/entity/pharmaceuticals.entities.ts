import { Users } from 'src/users/entity/users.entities';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Pharmaceuticals' })
export class Pharmaceuticals {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column({ name: 'pharmaceuticals', nullable: false })
  pharmaceuticals: string;

  @OneToOne(() => Users, (user) => user.pharma)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;

  constructor(
    props: {
      pharmaceuticals: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id;
  }
}
