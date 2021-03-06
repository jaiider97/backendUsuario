import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port=process.env.HOST;
  await app.listen(port);
 console.log(await app.getUrl,"_modern__> started");
}
bootstrap();
