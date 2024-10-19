import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class LeaderboardGateway {
  @WebSocketServer() server: Server;

  sendLeaderboardUpdate(data: any) {
    console.log(data, 'data');
    this.server.emit('leaderboard-update', data);
  }
}
