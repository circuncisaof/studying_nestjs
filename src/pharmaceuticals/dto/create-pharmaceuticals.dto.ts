import { IsString } from 'class-validator';

export class CreatePharmaceuticals {
  @IsString()
  pharmaceuticals: string;
}
