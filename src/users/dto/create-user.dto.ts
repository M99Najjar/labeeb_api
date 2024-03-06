import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  phoneNumber: number;

  role: string;

  @IsNotEmpty()
  facultyId: number;

  @IsEmail()
  email: string;
}
