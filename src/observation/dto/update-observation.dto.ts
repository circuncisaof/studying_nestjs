import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

class _UpdateObservationDto {
  @IsString()
  observation: string;
}

export class UpdateObservation extends PartialType(_UpdateObservationDto) {}
