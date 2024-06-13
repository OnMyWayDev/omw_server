import { PickType } from '@nestjs/swagger';
import { User } from '../user.schema';
// import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserReadOnlyDto extends PickType(User, [
  'email',
  'authToken',
] as const) {}
