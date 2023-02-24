import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { Address } from './address.model';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async getAll(@Res() response) {
    const addresses = await this.addressService.findAll();
    return response.status(HttpStatus.OK).json(addresses);
  }

  @Get(':name')
  async getAddressByName(@Param('name') name: string, @Res() response) {
    const addresses = await this.addressService.findManyByName(name);
    if (addresses.length === 0) return response.status(HttpStatus.NOT_FOUND);
    return response.status(HttpStatus.OK).json({
      addresses,
    });
  }

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto, @Res() response) {
    let address: Address = await this.addressService.findOneByRutBankAndAccount(
      createAddressDto.rut,
      createAddressDto.bank,
      createAddressDto.accountType,
      createAddressDto.accountNumber,
    );

    // si el destinatario existe retornamos 409 para informar al front
    if (address) {
      return response.status(HttpStatus.CONFLICT).json({
        success: false,
        message: 'El destinatario ya existe.',
      });
    }

    // creamos el destinatario
    address = await this.addressService.createAddress(createAddressDto);

    return response.status(HttpStatus.OK).json({
      address,
      success: true,
    });
  }
}
