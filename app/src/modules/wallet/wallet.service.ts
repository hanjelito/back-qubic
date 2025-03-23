import { Injectable, NotFoundException } from '@nestjs/common';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet, WalletDocument } from './entities/wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel(Wallet.name) private walletModel: Model<WalletDocument>,
  ) {}

  async findAll() {
    return this.walletModel.find().exec();
  }

  async findOne(id: string): Promise<Wallet> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException(`Invalid wallet ID: ${id}`);
    }
    const wallet = await this.walletModel.findById(id).exec();
    if (!wallet) {
      throw new NotFoundException(`Wallet with ID ${id} not found`);
    }
    return wallet;
  }

  async findByUserId(userId: string): Promise<Wallet> {
    const wallet = await this.walletModel.findOne({ userId }).exec();
    if (!wallet) {
      throw new NotFoundException(`Wallet for user ${userId} not found`);
    }
    return wallet;
  }

  async getWalletSummary(userId: string) {
    const wallet = await this.findByUserId(userId);

    // Calcular estadísticas adicionales
    const tokensCount = wallet.tokenBalances.length;
    const totalTokensAmount = wallet.tokenBalances.reduce((sum, token) => sum + token.amount, 0);
    const totalTokensValue = wallet.tokenBalances.reduce((sum, token) => sum + token.totalValue, 0);
    const totalProfitLoss = wallet.tokenBalances.reduce((sum, token) => sum + token.profitLoss.amount, 0);

    return {
      userId: wallet.userId,
      fiatBalance: wallet.fiatBalance,
      tokensCount,
      totalTokensAmount,
      totalTokensValue,
      totalProfitLoss,
      totalPortfolioValue: wallet.totalPortfolioValue,
      lastUpdated: wallet.lastUpdated
    };
  }
}
