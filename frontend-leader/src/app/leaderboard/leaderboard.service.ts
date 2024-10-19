import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private socket = io('http://localhost:3000');

  private playersSubject = new BehaviorSubject<any[]>([]);
  players$ = this.playersSubject.asObservable();

  constructor() {
    // Listen to leaderboard updates
    this.socket.on('leaderboard-update', (data) => {
      console.log('Updated leaderboard:', data);
      this.playersSubject.next(data); // Push the new data to BehaviorSubject
    });
  }
}
