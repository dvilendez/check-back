import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AddressController } from './address.controller';
import { Address } from './address.model';
import { AddressService } from './address.service';

@Module({
  imports: [SequelizeModule.forFeature([Address])],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AddressModule {}
