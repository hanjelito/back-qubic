import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFundingDto } from './dto/create-funding.dto';
import { UpdateFundingDto } from './dto/update-funding.dto';
import { Funding, FundingDocument } from './entities/funding.entity';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FundingService {
  constructor(
    @InjectModel(Funding.name) private fundingModel: Model<FundingDocument>,
  ) {}

  findAll() {
    return this.fundingModel.find().exec();
  }

  async findOne(id: string): Promise<Funding> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException(`Invalid token ID: ${id}`);
    }

    const token = await this.fundingModel.findById(id).exec();

    if (!token) {
      throw new NotFoundException(`Token with ID ${id} not found`);
    }

    return token;
  }
}
