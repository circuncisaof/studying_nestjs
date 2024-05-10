import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

class _UpdatePhamaceuticalsDto {
  @IsString()
  pharmaceuticals: string;
}
export class UpdatePhamaceuticalsDto extends PartialType(
  _UpdatePhamaceuticalsDto,
) {}
