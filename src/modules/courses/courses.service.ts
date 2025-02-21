import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseDocument } from './models/course.models';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from '../teachers/models/teacher.model';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) readonly courseModel: Model<CourseDocument>,
    @InjectModel(Teacher.name) readonly teacherModel: Model<TeacherDocument>,
  ) {}
  async createCourse(courseDto: CreateCourseDto) {
    const findTeacher = await this.teacherModel.findById(courseDto.teacherId);

    if (!findTeacher)
      throw new BadRequestException('Bunday teacher mavjud emas');

    const course = await this.courseModel.create(courseDto);

    if (!course) throw new BadRequestException('Something went wrong');

    return {
      success: true,
      message: 'Kurs muvaffaqqiyatli yaratildi',
      data: course,
    };
  }
}
