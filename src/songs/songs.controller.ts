import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get()
    findAll(){
        return 'find all songs';
    }

    @Get('/:id')
    findOne(@Param('id') id: string){
        return `find one song with id: ${id}`;
    }

    @Post()
    create(){
        return 'create a new song';
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
