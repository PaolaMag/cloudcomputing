import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { host: 'microservice-trabajadores', port: 5003 },
      // options: { host: '127.0.0.1', port: 5003 },
    },
  );
  await app.listen();
}
bootstrap();
