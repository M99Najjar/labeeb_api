import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository
      .save(createUserDto)
      .then((r) => r)
      .catch((e) => e);
  }

  findAll(query: UpdateUserDto) {
    return this.userRepository
      .find({
        where: query,
        relations: {
          faculty: { university: true },
          codes: true,
        },
      })
      .then((r) => r)
      .catch((e) => e);
  }

  findOne(id: number) {
    return this.userRepository
      .find({
        where: { id },
        relations: {
          faculty: { university: true },
          codes: true,
        },
      })
      .then((r) => r)
      .catch((e) => e);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository
      .update({ id }, updateUserDto)
      .then((r) => r)
      .catch((e) => e);
  }

  remove(id: any) {
    return this.userRepository
      .delete({ id: In([id]) })
      .then((r) => r)
      .catch((e) => e);
  }
}
