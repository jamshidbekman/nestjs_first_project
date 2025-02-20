import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from 'src/common/constants/roles.enum';

export type TeacherDocument = Teacher;

@Schema({ versionKey: false, timestamps: true })
export class Teacher {
  @Prop({ required: [true, 'Fullname is required'] })
  fullName: string;

  @Prop({ required: [true, 'Phone is required'] })
  phone: string;

  @Prop({ default: null })
  email: string;

  @Prop({ required: [true, 'Subjects is required'] })
  subjects: string[];

  @Prop({ required: [true, 'Salary is required'] })
  salary: number;

  @Prop({ required: [true, 'Experience year is required'] })
  experienceYears: number;

  @Prop({ default: Role.TEACHER, enum: [Role.TEACHER] })
  role: string;

  @Prop({ enum: ['active', 'inactive'], default: 'inactive' })
  status: 'active' | 'inactive';

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
