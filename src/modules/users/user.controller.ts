import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import UserService from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RoleGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles.enum';

@Controller('admin')
@UseGuards(AuthGuard, RoleGuard)
class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @Roles(Role.SUPERADMIN)
  async createAdminController(@Body() createUserDto: Omit<CreateUserDto, "role">) {
    return await this.userService.createAdmin(createUserDto);
  }
}
export default UserController;
