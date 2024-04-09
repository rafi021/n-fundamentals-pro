import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';

import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  async paginate(options: IPaginationOptions): Promise<Pagination<Song>> {
    return await paginate<Song>(this.songRepository, options);
  }

  async create(songDTO: CreateSongDTO): Promise<Song> {
    // const song = new Song();
    // song.title = songDTO.title;
    // song.artists = songDTO.artists;
    // song.releaseDate = songDTO.releaseDate;
    // song.duration = songDTO.duration;
    // song.lyrics = songDTO.lyrics;
    // return await this.songRepository.save(song);
    return this.songRepository.save(songDTO);
  }

  async findAll(): Promise<Song[]> {
    return await this.songRepository.find();
  }

  findOne(id: number): Promise<Song> {
    return this.songRepository.findOneBy({ id });
  }

  update(id: number, recordToUpdate: UpdateSongDTO): Promise<UpdateResult> {
    return this.songRepository.update(id, recordToUpdate);
  }

  async remove(id: number): Promise<void> {
    await this.songRepository.delete(id);
  }
}
