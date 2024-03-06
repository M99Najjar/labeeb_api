import { Question } from 'src/questions/entities/question.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  describtion: string;

  @Column({ nullable: true })
  group: string;

  @ManyToOne(() => Subject, (s) => s.name)
  subject: Subject;
  @Column()
  subjectId: number;

  @OneToMany(() => Question, (q) => q.category)
  questions: Question[];
}
