import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TokenDocument = Token & Document;

@Schema()
export class Token {
  @Prop({ required: true })
  transactionId: string;

  @Prop({ required: true })
  playerId: string;

  @Prop({ required: true })
  playerName: string;

  @Prop({ required: true })
  tokenSymbol: string;

  @Prop({ required: true })
  tokenAmount: number;

  @Prop({ required: true })
  tokenPrice: number;

  @Prop({ required: true })
  totalCost: number;

  @Prop({ required: true })
  paymentMethod: string;

  @Prop({ required: true })
  transactionHash: string;

  @Prop({ required: true })
  timestamp: Date;

  @Prop({ required: true })
  status: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
