import { Controller } from '@nestjs/common';
import CoursesService from './course.service';

@Controller('course')
class CoursesController {
  constructor(private readonly courseService: CoursesService) {}
}

export default CoursesController;
