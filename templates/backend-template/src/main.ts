import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('running here');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('running here');
}
bootstrap();
