import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateTeacherDto {
  @IsString({ message: "FullName string bo'lishi kerak" })
  @IsNotEmpty({ message: "FullName to'ldirilishi shart" })
  @MinLength(10, {
    message: "FullName uzunligi 10 belgidan katta bo'lishi kerak",
  })
  @MaxLength(40, {
    message: "FullName uzunligi 40 belgidan kichik bo'lishi kerak",
  })
  fullName: string;

  @IsString({ message: "Telefon raqam string bo'lishi kerak" })
  @IsNotEmpty({ message: 'Telefon raqam kiritilishi shart' })
  @Matches(/^\+998\d{9}$/, {
    message:
      "Telefon raqam +998 bilan boshlanib, 9 ta raqamdan iborat bo'lishi kerak",
  })
  phone: string;

  @IsString({ message: "Email string bo'lishi kerak" })
  @IsNotEmpty({ message: 'Email kiritilishi shart' })
  @IsEmail({}, { message: 'Email noto‘g‘ri formatda kiritilgan' })
  email: string;

  @IsArray({ message: "Subjects array bo'lishi kerak" })
  @ArrayMinSize(1, { message: 'Subjectsga kamida bitta fan kiritilishi kerak' })
  @ArrayMaxSize(5, {
    message: "Subjectsga 5 tadan ko'p fan kiritish mumkin emas",
  })
  subjects: string[];

  @IsNumber({}, { message: 'Salary son bo‘lishi kerak' })
  @IsNotEmpty({ message: 'Salary kiritilishi shart' })
  @Min(0, { message: "Salary 0 dan katta bo'lishi kerak" })
  @Max(20000000, { message: "Salary 20mlndan kam bo'lishi kerak" })
  salary: number;

  @IsNumber({}, { message: 'Tajriba yili son bo‘lishi kerak' })
  @IsNotEmpty({ message: 'Tajriba kiritilishi shart' })
  @Min(0, { message: 'Tajriba yili 0 dan kam bo‘lishi mumkin emas' })
  @Max(50, { message: 'Tajriba yili 50 dan oshmasligi kerak' })
  experienceYears: number;
}
