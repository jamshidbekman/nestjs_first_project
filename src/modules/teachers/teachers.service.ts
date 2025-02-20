import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from './models/teacher.model';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>,
  ) {}

  async createTeacher(teacherDto: CreateTeacherDto) {
    const teacher = await this.teacherModel.create(teacherDto);
    if (!teacher) {
      throw new BadRequestException('Something went wrong!');
    }

    return {
      message: "O'qituvchi muvaffaqqiyatli yaratildi",
      success: true,
      data: teacher,
    };
  }

  async getAllTeachers() {
    const teachers = await this.teacherModel.find();

    if (teachers.length == 0) {
      return {
        message: "O'qituchilar mavjud emas",
        status: true,
        data: [],
      };
    }
    return {
      message: `${teachers.length} ta o'qituvchi topildi.`,
      status: true,
      data: teachers,
    };
  }
}
