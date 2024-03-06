import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    return this.questionsRepository
      .save(createQuestionDto)
      .then((r) => r)
      .catch((e) => e);
  }

  findAll(query: UpdateQuestionDto) {
    const { skip, take, ...filters } = query;
    return this.questionsRepository
      .find({
        where: filters,
        relations: { answers: true, category: true, exam: true },
        take: take,
        skip: skip,
      })
      .then((r) => r)
      .catch((e) => e);
  }

  findOne(id: number) {
    return this.questionsRepository
      .findOne({
        where: { id },
        relations: { answers: true, category: true, exam: true },
      })
      .then((r) => r)
      .catch((e) => e);
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.questionsRepository
      .update({ id }, updateQuestionDto)
      .then((r) => r)
      .catch((e) => e);
  }

  remove(id: number) {
    return this.questionsRepository
      .delete({ id: In([id]) })
      .then((r) => r)
      .catch((e) => e);
  }
}
