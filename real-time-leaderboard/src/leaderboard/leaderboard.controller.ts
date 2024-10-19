import { Controller, Get, Post, Body } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Post('update-score')
  updateScore(@Body() { player_id, score }) {
    return this.leaderboardService.updateScore(player_id, score);
  }

  @Get('top-players')
  getTopPlayers() {
    return this.leaderboardService.getTopPlayers();
  }
}
