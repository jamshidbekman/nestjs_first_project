import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './models/user.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/created-user.dto';
import { Role } from 'src/common/constants/roles.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email: email });
    return user;
  }

  async getUserByUsername(username: string) {
    const user = await this.userModel.findOne({ username: username });
    return user;
  }

  async createAdmin(userdto: Omit<CreateUserDto, 'role'>) {
    try {
      const hashedPassword = await bcrypt.hash(userdto.password, 12);
      const createAdmin = await this.userModel.create({
        ...userdto,
        role: Role.ADMIN,
        password: hashedPassword,
      });
      return {
        success: true,
        admin: createAdmin,
        message: 'Admin successfully created',
      };
    } catch (error) {
      throw new BadRequestException({
        message: error.message,
        statusCode: 400,
        status: false,
      });
    }
  }

  async getAllAdmins() {
    const admins = await this.userModel.find({ role: Role.ADMIN });
    if (admins.length == 0) {
      return {
        success: true,
        admins: [],
        message: 'Admins not found',
      };
    }

    return {
      success: true,
      admins: admins,
      message: 'Admins found',
    };
  }
}

export default UserService;
