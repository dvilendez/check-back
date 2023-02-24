import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BankController } from './bank.controller';
import { Bank } from './bank.model';
import { BankService } from './bank.service';

@Module({
  imports: [SequelizeModule.forFeature([Bank])],
  providers: [BankService],
  controllers: [BankController],
})
export class BankModule {}
