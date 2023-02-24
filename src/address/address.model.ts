import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Address extends Model {
  @Column
  rut: string;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  bank: string;

  @Column
  accountType: string;

  @Column
  accountNumber: bigint;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @Column
  deletedAt: Date;
}
