import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Address } from './address.model';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address)
    private addressModel: typeof Address,
  ) {}

  async findAll(): Promise<Address[]> {
    return this.addressModel.findAll();
  }

  findManyByName(name: string): Promise<Address[]> {
    const nameToSearch = '%' + name + '%';
    return this.addressModel.findAll({
      where: {
        name: {
          [Op.like]: nameToSearch,
        },
      },
    });
  }

  findOneByRutBankAndAccount(
    rut: string,
    bank: string,
    accountType: string,
    accountNumber: bigint,
  ): Promise<Address> {
    return this.addressModel.findOne({
      where: {
        rut,
        bank,
        accountType,
        accountNumber,
      },
    });
  }

  createAddress(address: CreateAddressDto): Promise<Address> {
    return this.addressModel.create({
      rut: address.rut,
      name: address.name,
      email: address.email,
      phone: address.phone,
      bank: address.bank,
      accountType: address.accountType,
      accountNumber: address.accountNumber,
    });
  }
}
