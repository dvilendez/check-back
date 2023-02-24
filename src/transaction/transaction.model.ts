import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Transaction extends Model {
  @Column
  rut: string;

  @Column
  name: string;

  @Column
  bank: string;

  @Column
  accountType: string;

  @Column
  ammount: bigint;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @Column
  deletedAt: Date;
}
