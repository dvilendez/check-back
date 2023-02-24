import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transaction.model';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.findAll();
  }

  createTransaction(transaction: CreateTransactionDto): Promise<Transaction> {
    return this.transactionModel.create({
      rut: transaction.rut,
      name: transaction.name,
      bank: transaction.bank,
      accountType: transaction.accountType,
      ammount: transaction.ammount,
    });
  }
}
