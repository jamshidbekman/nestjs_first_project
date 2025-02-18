import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  const configService = app.get(ConfigService);
  const PORT = Number(configService.get<string>('PORT'));
  await app.listen(PORT, () => {
    console.log('Server is running port', PORT);
  });
}
bootstrap();
