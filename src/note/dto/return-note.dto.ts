import { Note } from '../entity/note.entity';

export class ReturnNoteDto {
  type_treatment: string;
  last_consultation: string;
  next_consultation: string;

  constructor(note: Note) {
    this.type_treatment = note.type_treatment;
    this.last_consultation = note.last_consultation;
    this.next_consultation = note.next_consultation;
  }
}
