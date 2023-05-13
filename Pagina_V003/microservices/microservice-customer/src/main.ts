import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      // options: { host: 'microservice-customer', port: 5001 },
      options: { host: '127.0.0.1', port: 5001 },
    },
  );
  await app.listen();
}
bootstrap();
