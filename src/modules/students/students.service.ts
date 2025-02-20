import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './models/student.models';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) readonly studentModel: Model<StudentDocument>,
  ) {}

  async createStudent(studentDto: CreateStudentDto) {
    const student = await this.studentModel.create(studentDto);

    return student;
  }
}
