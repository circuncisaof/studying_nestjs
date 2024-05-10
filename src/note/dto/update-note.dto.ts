import { PartialType } from '@nestjs/mapped-types';

class _UpdateNoteDto {
  type_treatment: string;
  last_consultation: string;
  next_consultation: string;
}
export class UpdateNoteDto extends PartialType(_UpdateNoteDto) {}
