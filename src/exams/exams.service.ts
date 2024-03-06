import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exam)
    private examsrepository: Repository<Exam>,
  ) {}

  create(createExamDto: CreateExamDto) {
    return this.examsrepository
      .save(createExamDto)
      .then((r) => r)
      .catch((e) => e);
  }

  findAll(body: UpdateExamDto) {
    return this.examsrepository
      .find({
        where: body,
        relations: { subject: { faculty: { university: true } } },
      })
      .then((r) => r)
      .catch((e) => e);
  }

  findOne(id: number) {
    return this.examsrepository
      .find({
        where: { id },
        relations: { subject: { faculty: { university: true } } },
      })
      .then((r) => r)
      .catch((e) => e);
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return this.examsrepository
      .update({ id }, updateExamDto)
      .then((r) => r)
      .then((e) => e);
  }

  remove(id: any) {
    return this.examsrepository
      .delete({ id: In([id]) })
      .then((r) => r)
      .catch((e) => e);
  }
}
