import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDto } from './dto/create-users.dto';
import { ReturnUser } from './dto/return-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private serviceUsers: UsersService) {}

  @Post()
  create_users(@Body() createUSers: CreateDto) {
    return this.serviceUsers.create_users(createUSers);
  }

  @Get()
  async getAllUsers(): Promise<ReturnUser[]> {
    return (await this.serviceUsers.getAllUsers()).map(
      (user) => new ReturnUser(user),
    );
  }
  @Get(':id')
  async getUsers(@Param('id') id: string): Promise<ReturnUser> {
    return new ReturnUser(await this.serviceUsers.getUsers(id));
  }

  @Patch(':id')
  updateUsers(@Body() updateUsers: UpdateUsersDto, @Param('id') id: string) {
    return this.serviceUsers.updateUsers(updateUsers, id);
  }

  @Delete(':id')
  deleteUsers(@Param('id') id: string) {
    return this.serviceUsers.deleteUsers(id);
  }
}
