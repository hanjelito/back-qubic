import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FundingService } from './funding.service';
import { FundingController } from './funding.controller';
import { FundingSchema } from './entities/funding.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Funding', schema: FundingSchema, collection: 'fundings' },
    ]),
  ],
  controllers: [FundingController],
  providers: [FundingService],
})
export class FundingModule {}
