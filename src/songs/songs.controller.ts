import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}
    @Get()
    findAll(){
        return this.songsService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string){
        return "asa";
    }

    @Post()
    create(@Body() createSongDTO: CreateSongDTO){
        return this.songsService.create(createSongDTO);
    }

    @Put('/:id')
    update(@Param('id') id: string){
        return `update a song with id: ${id}`;
    }

    @Delete('/:id')
    delete(@Param('id') id: string){
        return `delete a song with id: ${id}`;
    }
}
