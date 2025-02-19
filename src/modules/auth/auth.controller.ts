import { Body, Controller, Post } from '@nestjs/common';
import AuthService from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async loginController(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto.username, loginUserDto.password);
  }
}

export default AuthController;
