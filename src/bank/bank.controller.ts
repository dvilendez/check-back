import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { BankService } from './bank.service';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  async fetchAll(@Res() response) {
    const banks = await this.bankService.findAll();
    return response.status(HttpStatus.OK).json(banks);
  }
}
