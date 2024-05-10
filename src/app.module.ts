import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { Address } from './address/entity/address.entities';
import { AuthModule } from './auth/auth.module';
import { Note } from './note/entity/note.entity';
import { NoteModule } from './note/note.module';
import { Observation } from './observation/entity/observation.entities';
import { ObservationModule } from './observation/observation.module';
import { Pharmaceuticals } from './pharmaceuticals/entity/pharmaceuticals.entities';
import { PhamaceuticalsModule } from './pharmaceuticals/pharmaceuticals.module';
import { Treatment } from './treatment/entity/treatment.entities';
import { TreatmentModule } from './treatment/treatment.module';
import { Users } from './users/entity/users.entities';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    AddressModule,
    ObservationModule,
    NoteModule,
    PhamaceuticalsModule,
    TreatmentModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      database: process.env.DATABASE,
      username: process.env.USER,
      password: process.env.PASSWORD,
      synchronize: true,
      logging: false,
      entities: [Users, Pharmaceuticals, Treatment, Observation, Note, Address],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
