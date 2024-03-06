import { Injectable } from '@nestjs/common';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Code } from './entities/code.entity';

@Injectable()
export class CodesService {
  constructor(
    @InjectRepository(Code)
    private codesRepository: Repository<Code>,
  ) {}

  create(createCodeDto: CreateCodeDto) {
    return this.codesRepository
      .save(createCodeDto)
      .then((r) => r)
      .catch((e) => e);
  }

  findAll(filters: UpdateCodeDto) {
    return this.codesRepository
      .find({ where: filters, relations: { subjects: true, user: true } })
      .then((r) => r)
      .catch((e) => e);
  }

  findOne(id: number) {
    return this.codesRepository
      .find({ where: { id }, relations: { subjects: true, user: true } })
      .then((r) => r)
      .catch((e) => e);
  }

  update(id: number, updateCodeDto: UpdateCodeDto) {
    return this.codesRepository
      .update({ id }, updateCodeDto)
      .then((r) => r)
      .catch((e) => e);
  }

  remove(ids: any) {
    return this.codesRepository
      .delete({ id: In([ids]) })
      .then((r) => r)
      .catch((e) => e);
  }
}
