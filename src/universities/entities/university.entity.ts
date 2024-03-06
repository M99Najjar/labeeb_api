import { Faculty } from 'src/faculties/entities/faculty.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class University {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Faculty, (faculty) => faculty.university)
  faculties: Faculty[];
}
