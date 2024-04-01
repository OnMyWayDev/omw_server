import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserRequestDto } from './dto/user.request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async signUp(body: UserRequestDto) {
    const { email, authToken, password } = body;
    const isUserExist = await this.userModel.exists({ email });

    if (isUserExist) throw new UnauthorizedException('User already exists');
    //HttpException 외에도 유용한 예외 클래스들 존재. => BadRequestException, UnauthorizedException, ForbiddenException, NotFoundException, InternalServerErrorException 등

    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

    const user = await this.userModel.create({
      email,
      authToken,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }
}
