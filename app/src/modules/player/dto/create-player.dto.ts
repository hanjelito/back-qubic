export class CreatePlayerDto {
  playerId: string;
  name: string;
  position: string;
  age: number;
  nationality: string;
  currentClub: string;
  targetClub: {
    clubId: string;
    name: string;
    logo: string;
  };
  contractValue: number;
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  fundingProgress: number;
  fundingDeadline: Date;
  status: string;
  image: string;
}
