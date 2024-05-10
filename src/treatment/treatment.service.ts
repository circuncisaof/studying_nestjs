import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TreatmentDto } from './dto/create-treatment.dto';
import { ReturnTreatmentDto } from './dto/return-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-tretament.dto';
import { Treatment } from './entity/treatment.entities';

@Injectable()
export class TreatmentService {
  constructor(
    @InjectRepository(Treatment)
    private readonly treatRepo: Repository<Treatment>,
  ) {}

  create_treat(createTreat: TreatmentDto) {
    return this.treatRepo.save(createTreat);
  }

  async all_treat(): Promise<ReturnTreatmentDto[]> {
    return (await this.treatRepo.find()).map(
      (treat) => new ReturnTreatmentDto(treat),
    );
  }

  async find_treat_id(id: string): Promise<ReturnTreatmentDto> {
    return new ReturnTreatmentDto(
      await this.treatRepo.findOneOrFail({ where: { id } }),
    );
  }

  async update_treat(updateTreat: UpdateTreatmentDto, id: string) {
    const update_treat_id = await this.treatRepo.findOneOrFail({
      where: { id },
    });

    Object.assign(update_treat_id.id, updateTreat);
    return this.treatRepo.save(update_treat_id);
  }

  delete_treat(id: string) {
    return this.treatRepo.delete(id);
  }
}
