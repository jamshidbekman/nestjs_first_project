import { Controller, Get, UseGuards } from '@nestjs/common';
import UserService from './user.service';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller()
@UseGuards(AuthGuard)
class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("")
  getSuperAdminInfo() {
    return {}
  }
}
export default UserController;
