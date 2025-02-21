import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty({ message: "Course name bo'sh bo'lmasligi kerak" })
  @MinLength(3, { message: "Course name 3 belgidan kam bo'lmasligi kerak" })
  name: string;

  @IsNotEmpty({ message: "Izoh bo'sh bo'lmasligi kerak" })
  @MinLength(10, { message: "Izoh 10 belgidan kam bo'lmasligi kerak" })
  description: string;

  @IsString({ message: "TeacherId stringda bo'lishi kerak" })
  @IsNotEmpty({ message: "TeacherId bo'sh bo'lmasligi kerak" })
  teacherId: string;

  @IsNumber()
  @Min(5, { message: "Studentlar soni 5 dan katta bo'lishi kerak" })
  @Max(30, { message: "Studentlar soni 30 dan kam bo'lishi kerak" })
  maxStudents: number;

  @IsNumber()
  @Min(0, { message: "Price 0 dan katta bo'lishi kerak" })
  price: number;

  @IsNumber()
  @Min(1, { message: "Duration 1 dan katta bo'lishi kerak" })
  duration: number;
}
