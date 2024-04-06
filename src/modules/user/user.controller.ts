import { Body, Controller, Post } from '@nestjs/common';
import { UserSignUpDto } from './dto/user.request.dto';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserReadOnlyDto } from './dto/user.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/sign-up')
  @ApiResponse({ status: 201, description: 'Created', type: UserReadOnlyDto })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async signUp(@Body() body: UserSignUpDto) {
    return await this.userService.signUp(body);
  }
}
