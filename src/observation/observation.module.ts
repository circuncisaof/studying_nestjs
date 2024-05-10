import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Observation } from './entity/observation.entities';
import { ObservationController } from './observation.controller';
import { ObservationService } from './observation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Observation])],
  controllers: [ObservationController],
  providers: [ObservationService],
})
export class ObservationModule {}
