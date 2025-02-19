import { Injectable, UnauthorizedException } from '@nestjs/common';
import UserService from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    if (!username && !password) {
      throw new UnauthorizedException('Username and password not entered');
    }

    const user = await this.userService.getUserByUsername(username);

    if (!user)
      throw new UnauthorizedException('Username or password incorrect');

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword)
      throw new UnauthorizedException('Username or password incorrect');

    return user;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);

    const payload = { id: user._id, username: user.username, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
export default AuthService;
