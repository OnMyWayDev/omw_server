import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  authToken: string;

  password: string;
}
