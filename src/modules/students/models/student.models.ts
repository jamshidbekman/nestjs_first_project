import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StudentDocument = Student;

@Schema({ versionKey: false, timestamps: true })
export class Student {
  @Prop()
  fullName: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  birthDate: Date;

  @Prop()
  courses: string[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
