import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/address/entity/address.entities';
import { Observation } from 'src/observation/entity/observation.entities';
import { Pharmaceuticals } from 'src/pharmaceuticals/entity/pharmaceuticals.entities';
import { Treatment } from 'src/treatment/entity/treatment.entities';
import { Users } from './entity/users.entities';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Users,
      Address,
      Pharmaceuticals,
      Observation,
      Treatment,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
