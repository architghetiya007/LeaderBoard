import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './entities/player.entity';
import { LeaderboardGateway } from 'src/utils/leaderboard.gateway';
import { Model } from 'mongoose';

@Injectable()
export class LeaderboardService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<Player>,
    private gateway: LeaderboardGateway,
  ) {}

  async updateScore(player_id: string, score: number) {
    const player = await this.playerModel.findOneAndUpdate(
      { player_id: player_id },
      { $set: { score } },
      { upsert: true },
    );
    this.updateLeaderboard();
  }

  async getTopPlayers() {
    return this.playerModel.find().sort({ score: -1 }).limit(100).exec();
  }

  private async updateLeaderboard() {
    const topPlayers = await this.getTopPlayers();
    this.gateway.sendLeaderboardUpdate(topPlayers);
  }
}
