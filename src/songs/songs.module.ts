import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song.entity';

const mockSongsService = {
  findAll() {
    return [
      {
        id: 1,
        title: 'Lasting lover',
      },
    ];
  },
};

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongsController],
  providers: [
    SongsService,

    //value based providers
    {
      provide: SongsService,
      useValue: mockSongsService,
    },

    // Non Class based providers
    // You can use it to add constant values
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
