// wallet.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type WalletDocument = Wallet & Document;

class FiatBalance {
  @Prop({ required: true })
  currency: string;

  @Prop({ required: true, default: 0 })
  amount: number;
}

class ProfitLoss {
  @Prop({ required: true, default: 0 })
  amount: number;

  @Prop({ required: true, default: 0 })
  percentage: number;
}

class TokenBalance {
  @Prop({ required: true })
  tokenSymbol: string;

  @Prop({ required: true })
  playerId: string;

  @Prop({ required: true })
  playerName: string;

  @Prop({ required: true, default: 0 })
  amount: number;

  @Prop({ required: true, default: 0 })
  valuePerToken: number;

  @Prop({ required: true, default: 0 })
  totalValue: number;

  @Prop({ type: ProfitLoss, required: true })
  profitLoss: ProfitLoss;
}

@Schema({ timestamps: true })
export class Wallet {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ type: FiatBalance, required: true })
  fiatBalance: FiatBalance;

  @Prop({ type: [TokenBalance], default: [] })
  tokenBalances: TokenBalance[];

  @Prop({ required: true, default: 0 })
  totalPortfolioValue: number;

  @Prop({ required: true, default: Date.now })
  lastUpdated: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);

// Hooks pre-save para calcular el valor total del portafolio
WalletSchema.pre('save', function (next) {
  // Calcular el valor total del portafolio sumando el saldo de fiat y el valor de todos los tokens
  const tokensValue = this.tokenBalances.reduce(
    (sum, token) => sum + token.totalValue,
    0,
  );
  this.totalPortfolioValue = this.fiatBalance.amount + tokensValue;

  // Actualizar la fecha de última actualización
  this.lastUpdated = new Date();

  next();
});
