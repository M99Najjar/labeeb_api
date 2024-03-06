import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  create(createSubjectDto: CreateSubjectDto) {
    return this.subjectRepository
      .save({ ...createSubjectDto })
      .then((result) => result)
      .catch((e) => e);
  }

  findAll(body: any) {
    return this.subjectRepository
      .find({
        where: { ...body },
        relations: { faculty: { university: true } },
      })
      .then((resault) => resault)
      .catch((e) => e);
  }

  findOne(id: number) {
    return this.subjectRepository
      .findOneBy({ id })
      .then((result) => result)
      .catch((e) => e);
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return this.subjectRepository
      .update({ id }, updateSubjectDto)
      .then((resault) => resault)
      .catch((e) => e);
  }

  async remove(id: any) {
    return this.subjectRepository
      .delete({ id: In([id]) })
      .then((result) => result)
      .catch((e) => e);
  }
}
