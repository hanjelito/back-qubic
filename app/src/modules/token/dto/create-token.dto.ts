export class CreateTokenDto {
  transactionId: string;
  playerId: string;
  playerName: string;
  tokenSymbol: string;
  tokenAmount: number;
  tokenPrice: number;
  totalCost: number;
  paymentMethod: string;
  transactionHash: string;
  timestamp: Date;
  status: string;
}
