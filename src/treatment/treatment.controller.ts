import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ReturnTreatmentDto } from './dto/return-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-tretament.dto';
import { TreatmentService } from './treatment.service';
import { TreatmentDto } from './dto/create-treatment.dto';

@Controller('treatment')
export class TreatmentController {
  constructor(private treatService: TreatmentService) {}

  @Post()
  create_treat(@Body() createUSers: TreatmentDto) {
    return this.treatService.create_treat(createUSers);
  }

  @Get()
  async all_treat(): Promise<ReturnTreatmentDto[]> {
    return (await this.treatService.all_treat()).map(
      (treat) => new ReturnTreatmentDto(treat),
    );
  }
  @Get(':id')
  async find_treat_id(@Param('id') id: string): Promise<ReturnTreatmentDto> {
    return new ReturnTreatmentDto(await this.treatService.find_treat_id(id));
  }

  @Patch(':id')
  update_treat(
    @Body() updateTreat: UpdateTreatmentDto,
    @Param('id') id: string,
  ) {
    return this.treatService.update_treat(updateTreat, id);
  }

  @Delete(':id')
  delete_treat(@Param('id') id: string) {
    return this.treatService.delete_treat(id);
  }
}
