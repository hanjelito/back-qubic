import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
  @Prop({ required: true })
  playerId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  currentClub: string;

  @Prop({
    type: {
      clubId: String,
      name: String,
      logo: String,
    },
    required: true,
  })
  targetClub: {
    clubId: string;
    name: string;
    logo: string;
  };

  @Prop({ required: true })
  contractValue: number;

  @Prop({ required: true })
  tokenPrice: number;

  @Prop({ required: true })
  totalTokens: number;

  @Prop({ required: true })
  soldTokens: number;

  @Prop({ required: true })
  fundingProgress: number;

  @Prop({ required: true })
  fundingDeadline: Date;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  image: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
