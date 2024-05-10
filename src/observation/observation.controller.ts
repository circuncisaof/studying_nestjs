import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ObservationDto } from './dto/create-observation.dto';
import { ReturnObservations } from './dto/return-observation.dto';
import { UpdateObservation } from './dto/update-observation.dto';
import { ObservationService } from './observation.service';

@Controller('Observation')
export class ObservationController {
  constructor(private obsService: ObservationService) {}

  @Post()
  create_users(@Body() createUSers: ObservationDto) {
    return this.obsService.create_observations(createUSers);
  }

  @Get()
  async getAllUsers(): Promise<ReturnObservations[]> {
    return (await this.obsService.all_observations()).map(
      (user) => new ReturnObservations(user),
    );
  }
  @Get(':id')
  async getUsers(@Param('id') id: string): Promise<ReturnObservations> {
    return new ReturnObservations(
      await this.obsService.find_observations_id(id),
    );
  }

  @Patch(':id')
  updateUsers(@Body() updateUsers: UpdateObservation, @Param('id') id: string) {
    return this.obsService.update_observations(updateUsers, id);
  }

  @Delete(':id')
  deleteUsers(@Param('id') id: string) {
    return this.obsService.delete_observations(id);
  }
}
