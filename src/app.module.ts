import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import CourseModule from './modules/courses/course.module';
import configuration from './config/configuration';
import { JwtModule } from '@nestjs/jwt';
import UserModule from './modules/users/user.module';
import AuthModule from './modules/auth/auth.module';

const ENV = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `.env.${ENV}`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.get<string>('DB_URL'),
          dbName: configService.get<string>('DB_NAME'),
        };
      },
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      global: true,
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_KEY'),
          signOptions: {expiresIn: '2h'}
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
