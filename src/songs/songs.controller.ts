import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}
    @Get()
    findAll(){
        return this.songsService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string){
        return this.songsService.findOne(id);
    }

    @Post()
    create(){
        return this.songsService.create({
            title: 'title',
            artist: 'artist',
            album: 'album',
            id: 1
        });
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
