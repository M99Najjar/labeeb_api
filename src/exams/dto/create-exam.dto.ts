import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Subject } from 'src/subjects/entities/subject.entity';

export class CreateExamDto {
  @IsString()
  name: string;
  @IsNumber()
  year: number;
  @IsNotEmpty()
  subjectId: number;
}
