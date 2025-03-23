import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  async findAll() {
    return this.walletService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.walletService.findOne(id);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.walletService.findByUserId(userId);
  }

  @Get('summary/:userId')
  async getWalletSummary(@Param('userId') userId: string) {
    return this.walletService.getWalletSummary(userId);
  }
}