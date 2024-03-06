import { Code } from 'src/codes/entities/code.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  phoneNumber: number;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ default: false })
  isBaned: boolean;

  @ManyToOne(() => Faculty)
  faculty: Faculty;
  @Column()
  facultyId: number;

  @OneToMany(() => Code, (c) => c.user)
  codes: Code[];
}
