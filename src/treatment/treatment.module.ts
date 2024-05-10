import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Treatment } from './entity/treatment.entities';
import { TreatmentController } from './treatment.controller';
import { TreatmentService } from './treatment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Treatment])],
  controllers: [TreatmentController],
  providers: [TreatmentService],
})
export class TreatmentModule {}
