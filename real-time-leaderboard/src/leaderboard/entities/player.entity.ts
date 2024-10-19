import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Player extends Document {
  @Prop({ required: true })
  player_id: string;

  @Prop({ required: true, default: 0 })
  score: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
