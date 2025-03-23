// funding.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type FundingDocument = Funding & Document;

class RecentInvestor {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  tokens: number;

  @Prop({ required: true, default: Date.now })
  timestamp: Date;
}

class FundingTrend {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  amount: number;
}

class TimeRemaining {
  @Prop()
  days: number;

  @Prop()
  hours: number;

  @Prop()
  minutes: number;

  @Prop()
  seconds: number;
}

@Schema({ timestamps: true })
export class Funding {
  @Prop({ required: true, unique: true })
  playerId: string;

  @Prop({ required: true })
  playerName: string;

  @Prop({ required: true, unique: true })
  tokenSymbol: string;

  @Prop({ required: true })
  contractValue: number;

  @Prop({ required: true })
  fundingGoal: number;

  @Prop({ required: true, default: 0 })
  fundingRaised: number;

  @Prop()
  fundingProgress: number;

  @Prop({ required: true })
  totalTokens: number;

  @Prop({ required: true, default: 0 })
  soldTokens: number;

  @Prop()
  remainingTokens: number;

  @Prop({ required: true })
  tokenPrice: number;

  @Prop({ required: true })
  fundingDeadline: Date;

  @Prop({ type: TimeRemaining })
  timeRemaining: TimeRemaining;

  @Prop({
    required: true,
    enum: ['active', 'completed', 'failed', 'pending'],
    default: 'pending',
  })
  status: string;

  @Prop({ type: [{ type: MongooseSchema.Types.Mixed }] })
  recentInvestors: RecentInvestor[];

  @Prop({ type: [{ type: MongooseSchema.Types.Mixed }] })
  fundingTrend: FundingTrend[];
}

export const FundingSchema = SchemaFactory.createForClass(Funding);

// Hooks pre-save para calcular valores derivados
FundingSchema.pre('save', function (next) {
  // Calcular remainingTokens
  this.remainingTokens = this.totalTokens - this.soldTokens;

  // Calcular fundingProgress
  this.fundingProgress = parseFloat(
    ((this.fundingRaised / this.fundingGoal) * 100).toFixed(1),
  );

  // Calcular timeRemaining
  const now = new Date();
  const deadline = new Date(this.fundingDeadline);
  const diff = Math.max(0, deadline.getTime() - now.getTime());

  this.timeRemaining = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };

  next();
});
