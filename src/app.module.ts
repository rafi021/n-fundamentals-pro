import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { DevConfigService } from './common/providers/DevConfigService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Song } from './songs/song.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mediumclone',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [Song],
      synchronize: true,
    }),
    SongsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: DevConfigService,
      useClass: DevConfigService,
    },
  ],
})
export class AppModule implements NestModule {
  constructor(dataSource: DataSource) {
    console.log('dbName: ' + dataSource.driver.database);
  }

  configure(consumer: MiddlewareConsumer) {
    //  consumer.apply(LoggerMiddleware).forRoutes('songs'); // option :1
    //  consumer.apply(LoggerMiddleware).forRoutes({path: 'songs', method: RequestMethod.POST }); // option :2;
    consumer.apply(LoggerMiddleware).forRoutes(SongsController); // option :3;
  }
}
