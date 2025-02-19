import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from 'src/common/constants/roles.enum';

export type UserDocument = User;

@Schema({ versionKey: false })
export class User {
  @Prop({ required: [true, 'Fullname is required'] })
  fullName: string;

  @Prop({ unique: [true, 'This email already exists'] })
  email: string;

  @Prop({
    required: [true, 'Username is required'],
    unique: [true, 'This username already exists'],
  })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: [Role.ADMIN, Role.ACCOUNTANT] })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
