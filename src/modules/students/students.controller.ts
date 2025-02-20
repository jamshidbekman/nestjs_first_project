import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RoleGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles.enum';

@Controller('students')
@UseGuards(AuthGuard, RoleGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('create')
  @Roles(Role.ADMIN)
  async createStudentController(@Body() createStudentDto: CreateStudentDto) {
    return await this.studentsService.createStudent(createStudentDto);
  }
}
