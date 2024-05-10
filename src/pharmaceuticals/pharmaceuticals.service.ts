import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePharmaceuticals } from './dto/create-pharmaceuticals.dto';
import { UpdatePhamaceuticalsDto } from './dto/update-pharmaceuticals.dto';
import { Pharmaceuticals } from './entity/pharmaceuticals.entities';

@Injectable()
export class PharmaceuticalsService {
  constructor(
    @InjectRepository(Pharmaceuticals)
    private readonly pharmaRepo: Repository<Pharmaceuticals>,
  ) {}
  create_pharma(createPharmaceuticals: CreatePharmaceuticals) {
    return this.pharmaRepo.save(createPharmaceuticals);
  }

  all_pharma() {
    return this.pharmaRepo.find();
  }

  find_pharma_id(id: string) {
    return this.pharmaRepo.findOneOrFail({ where: { id } });
  }

  async update_pharma(updatePharmaDto: UpdatePhamaceuticalsDto, id: string) {
    const update_note_user = await this.pharmaRepo.findOneOrFail({
      where: { id },
    });

    Object.assign(update_note_user.id, updatePharmaDto);
    return this.pharmaRepo.save(updatePharmaDto);
  }

  delete_pharma(id: string) {
    return this.pharmaRepo.delete(id);
  }
}
