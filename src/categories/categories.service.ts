import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { In, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categorieRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categorieRepository.save(createCategoryDto);
  }

  findAll(body: UpdateCategoryDto) {
    return this.categorieRepository
      .find({
        where: body,
        relations: { subject: { faculty: { university: true } } },
      })
      .then((r) => r)
      .catch((e) => e);
  }

  findOne(id: number) {
    return this.categorieRepository
      .findOne({
        where: { id },
        relations: { subject: { faculty: { university: true } } },
      })
      .then((r) => r)
      .catch((e) => e);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categorieRepository
      .update({ id }, updateCategoryDto)
      .then((r) => r)
      .catch((e) => e);
  }

  remove(ids: any) {
    return this.categorieRepository
      .delete({ id: In([ids]) })
      .then((r) => r)
      .catch((e) => e);
  }
}
