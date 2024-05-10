import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Users } from './entity/users.entities';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
  ) {}

  create_users(createUSers: CreateDto) {
    const users = new Users(createUSers);
    if (!createUSers.email || !createUSers.name) {
      throw new Error('Ja exite esse usuario');
    }

    return this.usersRepo.save(users);
  }

  getAllUsers() {
    return this.usersRepo.find();
  }

  getUsers(id: string) {
    return this.usersRepo.findOneOrFail({
      where: { id: id },
      relations: ['address', 'note', 'observation', 'pharma', 'treatment'],
    });
  }

  async updateUsers(updateUsers: UpdateUsersDto, id: string) {
    const update_user_id = await this.usersRepo.findOneOrFail({
      where: { id },
    });

    updateUsers.email && (update_user_id.name = updateUsers.name);
    updateUsers.email && (update_user_id.email = updateUsers.email);
    if (!update_user_id.id) {
      throw new NotFoundException(update_user_id);
    }

    Object.assign(update_user_id.id, updateUsers);
    return this.usersRepo.save(update_user_id);
  }

  deleteUsers(id: string) {
    return this.usersRepo.delete(id);
  }
}
