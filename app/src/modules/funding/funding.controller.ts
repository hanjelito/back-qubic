import { Controller, Get, Param } from '@nestjs/common';
import { FundingService } from './funding.service';

@Controller('funding')
export class FundingController {
  constructor(private readonly fundingService: FundingService) {}
  @Get()
  async findAll() {
    return this.fundingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.fundingService.findOne(id);
  }
}
