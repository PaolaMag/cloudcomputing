import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database-3.c9skxrtjqbeq.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'N6E2QE4uZA7bAIAl9eON',
      database: 'db_demo',
      entities: [Customer],
      //['src/**/**.entity{.ts,.js}'],
      synchronize: true,
      ssl: true,
      extra: {
        trustServerCertificate: true,
        Encrypt: true,
        IntegratedSecurity: false,
      },
    }),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
