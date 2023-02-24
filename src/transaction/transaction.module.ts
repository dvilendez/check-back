import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TransactionController } from './transaction.controller';
import { Transaction } from './transaction.model';
import { TransactionService } from './transaction.service';

@Module({
  imports: [SequelizeModule.forFeature([Transaction])],
  providers: [TransactionService],
  controllers: [TransactionController],
})
export class TransactionModule {}
