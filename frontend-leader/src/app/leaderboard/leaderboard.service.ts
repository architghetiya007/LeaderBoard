import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private socket = io('http://localhost:3000');

  private playersSubject = new BehaviorSubject<any[]>([]);
  players$ = this.playersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.http
      .get<any[]>('http://localhost:3000/leaderboard/top-players')
      .subscribe((data) => {
        this.playersSubject.next(data);
      });
    // Listen to leaderboard updates
    this.socket.on('leaderboard-update', (data) => {
      console.log('Updated leaderboard:', data);
      this.playersSubject.next(data); // Push the new data to BehaviorSubject
    });
  }
}
