import { Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { University } from './entities/university.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UniversitiesService {
  constructor(
    @InjectRepository(University)
    private universityRepository: Repository<University>,
  ) {}

  async create(createUniversityDto: CreateUniversityDto) {
    const newUniversity = this.universityRepository.create({...createUniversityDto});
    try {
      await this.universityRepository.save(newUniversity);
      return newUniversity;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
        const allUniversities = await this.universityRepository.find();
        return allUniversities;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const theUniversity = await this.universityRepository.findOneBy({id:id})
      return theUniversity
    } catch (error) {
      return error
    };
  }

  async update(id: number, updateUniversityDto: UpdateUniversityDto) {
    try {
      const theUniversity = await this.universityRepository.update(id,{...updateUniversityDto})
      return theUniversity
    } catch (error) {
      return error
    };  }

  async remove(id: number) {
      try {
        const deletedUniversity = await this.universityRepository.delete({id})
        return deletedUniversity;
      } catch (error) {
        return error
      }
  }
}
