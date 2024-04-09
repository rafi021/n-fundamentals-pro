import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // local db
    // local query

    private readonly songs = [];

    create(song){
        this.songs.push(song);
        return this.songs;
    }

    findAll(){
        // fetch the songs from the database
        // Erros comes while fetching the data from the database
        throw new Error ("Error in DB while fetching records");
        return this.songs;
    }

    findOne(id: number){
        return this.songs.find(song => song.id === id);
    }

    update(id: number, title: string, artist: string, album: string){
        const song = this.songs.find(song => song.id === id);
        song.title = title;
        song.artist = artist;
        song.album = album;
        return song;
    }
    
    delete(id: number){
        return this.songs.filter(song => song.id!== id);
    }
}
