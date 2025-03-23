export class CreateWalletDto {
  readonly userId: string;

  readonly fiatBalance: {
    currency: string;
    amount: number;
  };

  readonly tokenBalances?: Array<{
    tokenSymbol: string;
    playerId: string;
    playerName: string;
    amount: number;
    valuePerToken: number;
    totalValue: number;
    profitLoss: {
      amount: number;
      percentage: number;
    };
  }>;
}
