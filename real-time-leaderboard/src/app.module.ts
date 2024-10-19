import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaderboardGateway } from './utils/leaderboard.gateway';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/leader-board'),
    LeaderboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
