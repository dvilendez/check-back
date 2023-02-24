import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankModule } from './bank/bank.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '/cloudsql/ivory-setup-378803:southamerica-west1:check-test-postgres',
      port: 5432,
      username: 'postgres',
      password: 'check',
      database: 'check_devel',
      autoLoadModels: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    BankModule,
    TransactionModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
