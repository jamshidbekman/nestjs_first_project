import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { RoleGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles.enum';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('teachers')
@UseGuards(AuthGuard, RoleGuard)
export class TeachersController {
  constructor(private readonly teacherService: TeachersService) {}

  @Post('create')
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async createTeacherController(@Body() createTeacherDto: CreateTeacherDto) {
    return await this.teacherService.createTeacher(createTeacherDto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async getAllTeachersController() {
    return await this.teacherService.getAllTeachers()
  }
}
