import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Faculty } from 'src/faculties/entities/faculty.entity';

export class CreateSubjectDto {
  @IsString()
  name: string;

  @IsNumber()
  season: number;

  @IsNumber()
  year: number;

  @IsNotEmpty()
  facultyId: number;
}
