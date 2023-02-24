import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Bank extends Model {
  @PrimaryKey
  @Column
  id: bigint;

  @Column
  code: string;

  @Column
  name: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @Column
  deletedAt: Date;
}
