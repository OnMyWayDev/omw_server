import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserSignUpDto } from './dto/user.request.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.respository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async signUp(body: UserSignUpDto) {
    const { email, password } = body;
    const isUserExist = await this.userRepository.existsByEmail(email);

    if (isUserExist) throw new UnauthorizedException('User already exists');
    //HttpException 외에도 유용한 예외 클래스들 존재. => BadRequestException, UnauthorizedException, ForbiddenException, NotFoundException, InternalServerErrorException 등

    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

    const user = await this.userRepository.createUser({
      email,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }
}
