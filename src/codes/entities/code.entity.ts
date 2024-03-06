import { Subject } from 'src/subjects/entities/subject.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  Generated,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Code {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (u) => u.codes)
  user: User;
  @Column({ nullable: true })
  userId: number;

  @ManyToMany(() => Subject)
  @JoinTable()
  subjects: Subject[];
}
