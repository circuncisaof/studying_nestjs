import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDto } from '../dto/create-users.dto';
import { Users } from '../entity/users.entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateUserCase {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
  ) {}
  execute(input: CreateDto) {
    const users = new Users(input);
    if (!input.email || !input.name) {
      throw new Error('Ja exite esse usuario');
    }

    return this.usersRepo.save(users);
  }
}
