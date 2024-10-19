import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  players: any[] = [];

  constructor(
    private leaderboardService: LeaderboardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.onInit();
    this.leaderboardService.players$.subscribe((data) => {
      this.players = data;
      this.cdr.detectChanges(); // Trigger change detection
    });
  }
}
