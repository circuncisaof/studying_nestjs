import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entity/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepo: Repository<Note>,
  ) {}
  create_note(createAddress: NoteDto) {
    return this.noteRepo.save(createAddress);
  }

  all_note() {
    return this.noteRepo.find();
  }

  find_note_id(id: string) {
    return this.noteRepo.findOneOrFail({ where: { id } });
  }

  async update_note(id: string, updateNoteDto: UpdateNoteDto) {
    const update_note_user = await this.noteRepo.findOneOrFail({
      where: { id },
    });

    Object.assign(update_note_user.id, updateNoteDto);
    return this.noteRepo.save(updateNoteDto);
  }

  delete_note(id: string) {
    return this.noteRepo.delete(id);
  }
}
