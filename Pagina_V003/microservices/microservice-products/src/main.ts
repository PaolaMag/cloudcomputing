import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      // options: { host: 'microservice-products', port: 5002 },
      options: { host: '127.0.0.1', port: 5002 },
    },
  );
  await app.listen();
}
bootstrap();
