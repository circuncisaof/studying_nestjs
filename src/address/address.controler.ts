import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddress } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create_address(@Body() createAddress: CreateAddress) {
    return this.addressService.create_address(createAddress);
  }

  @Get()
  all_address() {
    return this.addressService.all_address();
  }

  @Get(':id')
  find_address_id(@Param('id') id: string) {
    return this.addressService.find_address_id(id);
  }

  @Patch(':id')
  update_address(
    @Param('id') id: string,
    @Body() updateAddress: UpdateAddressDto,
  ) {
    return this.addressService.update_address(id, updateAddress);
  }

  @Delete(':id')
  delete_adrress(@Param('id') id: string) {
    return this.addressService.delete_adrress(id);
  }
}
