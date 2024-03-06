import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Code } from 'src/codes/entities/code.entity';
import { Exam } from 'src/exams/entities/exam.entity';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Answer, Question } from 'src/questions/entities/question.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { University } from 'src/universities/entities/university.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      entities: [
        University,
        Faculty,
        Subject,
        Category,
        Exam,
        Question,
        Answer,
        User,
        Code,
      ],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
