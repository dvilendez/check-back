import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  async getAll(@Res() response) {
    const transactions = await this.transactionService.findAll();
    return response.status(HttpStatus.OK).json(transactions);
  }
  @Post()
  async create(
    @Body() createTransactionDto: CreateTransactionDto,
    @Res() response,
  ) {
    try {
      await this.transactionService.createTransaction(createTransactionDto);

      return response.status(HttpStatus.OK).json({
        success: true,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error,
      });
    }
  }
}
