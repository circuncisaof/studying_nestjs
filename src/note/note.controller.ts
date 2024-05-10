import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create_note(@Body() createAddress: NoteDto) {
    return this.noteService.create_note(createAddress);
  }

  @Get()
  all_note() {
    return this.noteService.all_note();
  }

  @Get(':id')
  find_note_id(@Param('id') id: string) {
    return this.noteService.find_note_id(id);
  }

  @Patch(':id')
  update_note(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update_note(id, updateNoteDto);
  }

  @Delete(':id')
  delete_note(@Param('id') id: string) {
    return this.noteService.delete_note(id);
  }
}
