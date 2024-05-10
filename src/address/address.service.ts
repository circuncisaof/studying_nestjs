import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddress } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entity/address.entities';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepo: Repository<Address>,
  ) {}

  create_address(createAddress: CreateAddress) {
    return this.addressRepo.save(createAddress);
  }

  all_address() {
    return this.addressRepo.find();
  }

  find_address_id(id: string) {
    return this.addressRepo.findOneOrFail({
      where: { id },
    });
  }

  async update_address(id: string, updateAddress: UpdateAddressDto) {
    const update_address_user = await this.addressRepo.findOneOrFail({
      where: { id },
    });

    Object.assign(update_address_user.id, updateAddress);
    return this.addressRepo.save(update_address_user);
  }

  delete_adrress(id: string) {
    return `this action updates a #${id} users`;
  }
}
