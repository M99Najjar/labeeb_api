import { IsString } from 'class-validator';
import { Subject } from 'src/subjects/entities/subject.entity';

export class CreateCodeDto {
  @IsString()
  name: string;
  description: string;
  subjects: Subject[];
}
