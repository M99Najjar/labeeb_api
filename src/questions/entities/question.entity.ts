import { Category } from 'src/categories/entities/category.entity';
import { Exam } from 'src/exams/entities/exam.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  hint: string;

  @ManyToOne(() => Category)
  category: Category;
  @Column({ nullable: true })
  categoryId: number;

  @ManyToOne(() => Exam)
  exam: Exam;
  @Column({ nullable: true })
  examId: number;

  @OneToMany(() => Answer, (a) => a.question, { cascade: true })
  answers: Answer[];
}

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  correct: boolean;

  @ManyToOne(() => Question, (q) => q.answers)
  question: Question;
}
