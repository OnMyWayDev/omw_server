import { PickType } from '@nestjs/swagger';
import { User } from '../user.schema';

export class UserSignUpDto extends PickType(User, [
  'email',
  'password',
] as const) {}
