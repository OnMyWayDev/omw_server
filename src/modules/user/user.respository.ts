import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { UserSignUpDto } from './dto/user.request.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.userModel.exists({ email });
    //try catch, throw Exception (DB error, 400) is available here, but unnecessary as of now since mongoose automatically throws error
    return !!result;
  }

  async createUser(user: UserSignUpDto): Promise<User> {
    return await this.userModel.create({ ...user, authToken: 'test Token' });
  }
}
