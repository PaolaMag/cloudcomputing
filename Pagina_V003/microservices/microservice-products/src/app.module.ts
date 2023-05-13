import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Product } from './products/products.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database-3.c9skxrtjqbeq.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'N6E2QE4uZA7bAIAl9eON',
      database: 'db_demo',
      entities: [Product],
      //['src/**/**.entity{.ts,.js}'],
      synchronize: true,
      ssl: true,
      extra: {
        trustServerCertificate: true,
        Encrypt: true,
        IntegratedSecurity: false,
      },
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
