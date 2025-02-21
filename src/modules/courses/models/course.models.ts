import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Teacher } from 'src/modules/teachers/models/teacher.model';

export type CourseDocument = Course;

@Schema({ versionKey: false, timestamps: true })
export class Course {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Teacher.name,
    required: true,
  })
  teacherId: string;
  @Prop()
  maxStudents: number;
  @Prop()
  price: number;
  @Prop()
  duration: number;
  @Prop({ enum: ['inactive', 'active'], default: 'inactive' })
  status: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
