import { Module } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardController } from './leaderboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './entities/player.entity';
import { LeaderboardGateway } from 'src/utils/leaderboard.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  ],
  controllers: [LeaderboardController],
  providers: [LeaderboardService, LeaderboardGateway],
})
export class LeaderboardModule {}
