import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RoleGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles.enum';

@Controller('courses')
@UseGuards(AuthGuard, RoleGuard)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post('create')
  @Roles(Role.ADMIN)
  async createCourseController(@Body() createCourseDto: CreateCourseDto) {
    return await this.coursesService.createCourse(createCourseDto);
  }
}
