import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from './entities/faculty.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private facultyRepository: Repository<Faculty>,
  ) {}

  async create(createFacultyDto: CreateFacultyDto) {
    try {
      const newFaculty = await this.facultyRepository.save(createFacultyDto);
      return newFaculty;
    } catch (error) {
      return error;
    }
  }

  async findAll(params: UpdateFacultyDto) {
    try {
      console.log(params);
      return await this.facultyRepository.find({
        where: params,
        relations: { university: true },
      });
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.facultyRepository.findOne({
        where: { id },
        relations: { university: true },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateFacultyDto: UpdateFacultyDto) {
    try {
      return await this.facultyRepository.update(
        { id },
        { ...updateFacultyDto },
      );
    } catch (error) {
      return error;
    }
  }
  async remove(ids: any) {
    return await this.facultyRepository.delete({ id: In([ids]) });
  }
}
