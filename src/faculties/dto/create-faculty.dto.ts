import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { University } from 'src/universities/entities/university.entity';

export class CreateFacultyDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  universityId: number;
}
