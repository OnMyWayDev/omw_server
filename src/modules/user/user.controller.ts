import { Body, Controller, Post } from '@nestjs/common';
import { UserRequestDto } from './dto/user.request.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signUp(@Body() body: UserRequestDto) {
    return await this.userService.signUp(body);
  }
}
