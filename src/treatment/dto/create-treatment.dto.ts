import { IsString } from 'class-validator';

export class TreatmentDto {
  @IsString()
  type_treatment: string;

  @IsString()
  start_in: string;

  @IsString()
  complete_in: string;
}
