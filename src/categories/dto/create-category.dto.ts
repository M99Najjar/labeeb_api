import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  isNumber,
} from 'class-validator';
import { Subject } from 'src/subjects/entities/subject.entity';

export class CreateCategoryDto {
  @IsString()
  name: string;

  describtion: string;

  group: string;

  @IsNumber()
  subjectId: number;
}
