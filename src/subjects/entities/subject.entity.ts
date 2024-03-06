import { Category } from 'src/categories/entities/category.entity';
import { Code } from 'src/codes/entities/code.entity';
import { Exam } from 'src/exams/entities/exam.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  season: number;

  @Column()
  year: number;

  @ManyToOne(() => Faculty, (faculty) => faculty.subjects)
  faculty: Faculty;
  @Column()
  facultyId: number;

  @OneToMany(() => Category, (c) => c.subject)
  categories: Category[];

  @OneToMany(() => Exam, (e) => e.subject)
  exams: Exam[];

  @ManyToMany(() => Code)
  @JoinTable()
  codes: Code[];
}
