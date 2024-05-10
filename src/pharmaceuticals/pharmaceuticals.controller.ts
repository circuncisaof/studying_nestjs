import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePharmaceuticals } from './dto/create-pharmaceuticals.dto';
import { ReturnPhamaceuticals } from './dto/return-phamaceuticals.dto';
import { UpdatePhamaceuticalsDto } from './dto/update-pharmaceuticals.dto';
import { PharmaceuticalsService } from './pharmaceuticals.service';

@Controller('pharma')
export class PharmaceuticalsController {
  constructor(private servicePharma: PharmaceuticalsService) {}

  @Post()
  create_Pharma(@Body() createUSers: CreatePharmaceuticals) {
    return this.servicePharma.create_pharma(createUSers);
  }

  @Get()
  async getAllPharma(): Promise<ReturnPhamaceuticals[]> {
    return (await this.servicePharma.all_pharma()).map(
      (user) => new ReturnPhamaceuticals(user),
    );
  }
  @Get(':id')
  async getPharma(@Param('id') id: string): Promise<ReturnPhamaceuticals> {
    return new ReturnPhamaceuticals(
      await this.servicePharma.find_pharma_id(id),
    );
  }

  @Patch(':id')
  updatePharma(
    @Body() updatePharma: UpdatePhamaceuticalsDto,
    @Param('id') id: string,
  ) {
    return this.servicePharma.update_pharma(updatePharma, id);
  }

  @Delete(':id')
  deletePharma(@Param('id') id: string) {
    return this.servicePharma.delete_pharma(id);
  }
}
