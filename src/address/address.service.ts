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

  find_address_id(user_id: string) {
    return this.addressRepo.findOne({
      where: { userId: user_id },
    });
  }

  async create_new_address(user_id: string, updateAddress: UpdateAddressDto) {
    console.log('create_new_address:', user_id);

    const data = await this.addressRepo
      .createQueryBuilder()
      .update<Address>(Address, {
        userId: user_id,
        cep: updateAddress.cep,
        city: updateAddress.city,
        number_home: updateAddress.number_home,
        state: updateAddress.state,
        complement: updateAddress.complement,
        place_public: updateAddress.place_public,
      })
      .execute();

    console.log('create_new_address update address:', updateAddress);
    console.log('updateAddress.userId', user_id);
    console.log(data);

    return data;
  }

  async update_address(user_id: string, updateAddress: UpdateAddressDto) {
    const update_address_user = await this.find_address_id(user_id);
    console.log(!update_address_user);
    if (!update_address_user) {
      console.log(user_id);
      console.log(updateAddress);

      await this.create_new_address(user_id, updateAddress);
    }
    // console.log('user_id:', user_id, 'updateAddress', updateAddress);
    // return await this.addressRepo
    //   .createQueryBuilder()
    //   .update(Address)
    //   .set({
    //     cep: updateAddress.cep,
    //     city: updateAddress.city,
    //     complement: updateAddress.complement,
    //     number_home: updateAddress.number_home,
    //     state: updateAddress.state,
    //     place_public: updateAddress.place_public,
    //   })
    //   .where({ userId: user_id })
    //   .execute();
  }

  delete_adrress(id: string) {
    return this.addressRepo.delete(id);
  }
}
