import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from 'src/common/constants/roles.enum';

export class CreateUserDto {
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @MinLength(6)
  password: string;

  @IsEnum([Role.ACCOUNTANT, Role.ADMIN])
  role: Role.ACCOUNTANT | Role.ADMIN;
}
