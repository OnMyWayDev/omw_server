import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

//add 'class-validator' for validation (differnet from 'typing') - see official docs for more info
@Schema(options)
export class User extends Document {
  @Prop({ required: true, unique: true })
  @IsNotEmpty()
  @IsString()
  authToken: string;

  @Prop({ required: true, unique: true })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Prop()
  password: string;

  @Prop()
  favPlaces: string[];

  @Prop()
  favRoutes: string[];

  @Prop()
  historyPlaces: string[];

  @Prop()
  historyRoutes: string[];

  readonly readOnlyData: { email: string }; //필요한 데이터만 보여줄수있음, 밑에 virtual 참고
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('readOnlyData').get(function (this: User) {
  //virtuals are document properties that you can get and set but that do not get persisted to MongoDB
  return {
    email: this.email,
  };
});
