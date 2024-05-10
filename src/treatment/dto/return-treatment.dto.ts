import { TreatmentDto } from './create-treatment.dto';

export class ReturnTreatmentDto {
  type_treatment: string;
  start_in: string;
  complete_in: string;

  constructor(treatment: TreatmentDto) {
    this.type_treatment = treatment.type_treatment;
    this.start_in = treatment.start_in;
    this.complete_in = treatment.complete_in;
  }
}
