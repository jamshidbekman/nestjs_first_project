import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty({ message: "FullName bo'sh bo'lmasligi kerak" })
  @MinLength(3, { message: "FullName 3 belgidan ko'p bo'lishi kerak" })
  fullName: string;

  @IsNotEmpty({ message: 'Telefon raqam kiritilishi shart' })
  @Matches(/^\+998\d{9}$/, { message: "Telefon raqam formati noto'g'ri" })
  phone: string;

  @IsEmail()
  email: string;

  @IsDate({ message: "Tug'ilgan sana formati noto'g'ri" })
  birthDate: Date;

  @IsArray()
  @ArrayMinSize(1, {
    message: "O'quvchi kamida bitta kursga qo'shilgan bo'lishi kerak",
  })
  @IsMongoId({ each: true, message: 'Course topilmadi' })
  courses: string[];
}
