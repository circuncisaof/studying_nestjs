import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressService } from 'src/address/address.service';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { users } from './entity/users.entities';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(users)
    private readonly usersRepo: Repository<users>,
    private readonly address: AddressService,
  ) {}

  async create_users(createUSers: CreateDto): Promise<users> {
    // const users = await this.getEmailFind(createUSers.id);
    // if (users) {
    //   throw new Error('Ja exite esse usuario');
    // }

    return this.usersRepo.save(createUSers);
  }
  async getEmailFind(user_id: string): Promise<users> {
    return await this.usersRepo.findOne({
      where: { id: user_id },
    });
  }
  async getAllUsers(): Promise<users[]> {
    return this.usersRepo.find();
  }

  async getUsers(id: string): Promise<users> {
    return this.usersRepo.findOneOrFail({
      where: { id: id },
      relations: ['address', 'note', 'observation', 'pharma', 'treatment'],
    });
  }

  async updateUsers(updateUsers: UpdateUsersDto, id: string) {
    const data = await this.getEmailFind(id);

    if (!data) {
      new Error('User not found');
    }

    await this.address.update_address(id, updateUsers.address);

    return await this.usersRepo
      .createQueryBuilder()
      .update<users>(users, {
        name: updateUsers.name,
        email: updateUsers.email,
        rg: updateUsers.rg,
        cpf: updateUsers.cpf,
        bith_day: updateUsers.bith_day,
        age: updateUsers.age,
        cell_phone: updateUsers.cell_phone,
      })
      .where({ id: id })
      .execute();
  }

  deleteUsers(id: string) {
    return this.usersRepo.delete(id);
  }
}
