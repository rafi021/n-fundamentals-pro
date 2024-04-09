import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}
    @Get()
    findAll(){
        try {
            return this.songsService.findAll();
        } catch (error) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR,{
                cause: error
            });
        }
    }

    @Get('/:id')
    findOne(
        // @Param('id', ParseIntPipe) // option: 1
        @Param(
            'id', 
            new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})
        ) 
        id:number
    ){
        return id;
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
