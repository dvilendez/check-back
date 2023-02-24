import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bank } from './bank.model';

@Injectable()
export class BankService {
  constructor(
    @InjectModel(Bank)
    private bankModel: typeof Bank,
  ) {}

  async findAll(): Promise<Bank[]> {
    return this.bankModel.findAll();
  }

  findOne(id: string): Promise<Bank> {
    return this.bankModel.findOne({
      where: {
        id,
      },
    });
  }
}
