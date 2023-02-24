export class CreateTransactionDto {
  rut: string;
  name: string;
  bank: string;
  accountType: string;
  ammount: bigint;
}
