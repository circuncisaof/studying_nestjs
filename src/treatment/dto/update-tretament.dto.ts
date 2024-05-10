import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class _UpdateTreatmentDto {
  @IsString()
  type_treatment: string;

  @IsString()
  start_in: string;

  @IsString()
  complete_in: string;
}

export class UpdateTreatmentDto extends PartialType(_UpdateTreatmentDto) {}
