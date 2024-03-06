import { Question } from 'src/questions/entities/question.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @ManyToOne(() => Subject, (s) => s.exams)
  subject: Subject;
  @Column()
  subjectId: number;

  @ManyToOne(() => Question, (q) => q.exam)
  questions: Question[];
}
