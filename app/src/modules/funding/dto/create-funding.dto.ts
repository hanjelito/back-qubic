// create-funding.dto.ts
export class CreateFundingDto {
  readonly playerId: string;
  readonly playerName: string;
  readonly tokenSymbol: string;
  readonly contractValue: number;
  readonly fundingGoal: number;
  readonly fundingRaised?: number;
  readonly totalTokens: number;
  readonly soldTokens?: number;
  readonly tokenPrice: number;
  readonly fundingDeadline: Date;
  readonly status?: string;
  readonly recentInvestors?: Array<{
    userId: string;
    amount: number;
    tokens: number;
    timestamp: Date;
  }>;
  readonly fundingTrend?: Array<{
    date: Date;
    amount: number;
  }>;
}
