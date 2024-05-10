import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pharmaceuticals } from './entity/pharmaceuticals.entities';
import { PharmaceuticalsController } from './pharmaceuticals.controller';
import { PharmaceuticalsService } from './pharmaceuticals.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pharmaceuticals])],
  controllers: [PharmaceuticalsController],
  providers: [PharmaceuticalsService],
})
export class PhamaceuticalsModule {}
