import { Subject } from 'src/subjects/entities/subject.entity';
import { University } from 'src/universities/entities/university.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => University, (university) => university.faculties)
  university: University;
  @Column()
  universityId: number;

  @OneToMany(() => Subject, (subject) => subject.faculty)
  subjects: Subject[];
}
