import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObservationDto } from './dto/create-observation.dto';
import { UpdateObservation } from './dto/update-observation.dto';
import { Observation } from './entity/observation.entities';

@Injectable()
export class ObservationService {
  constructor(
    @InjectRepository(Observation)
    private readonly obsRepo: Repository<Observation>,
  ) {}
  create_observations(createPharmaceuticals: ObservationDto) {
    return this.obsRepo.save(createPharmaceuticals);
  }

  all_observations() {
    return this.obsRepo.find();
  }

  find_observations_id(id: string) {
    return this.obsRepo.findOneOrFail({ where: { id } });
  }

  async update_observations(updatePharmaDto: UpdateObservation, id: string) {
    const update_note_user = await this.obsRepo.findOneOrFail({
      where: { id },
    });

    Object.assign(update_note_user.id, updatePharmaDto);
    return this.obsRepo.save(updatePharmaDto);
  }

  delete_observations(id: string) {
    return this.obsRepo.delete(id);
  }
}
