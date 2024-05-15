import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from 'src/address/address.module';
import { users } from './entity/users.entities';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([users]), AddressModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
