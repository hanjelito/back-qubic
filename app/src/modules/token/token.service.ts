import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateTokenDto } from './dto/create-token.dto';
import { Token, TokenDocument } from './entities/token.entity';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
  ) {}

  async create(createTokenDto: CreateTokenDto): Promise<Token> {
    const newToken = new this.tokenModel(createTokenDto);
    return newToken.save();
  }

  async findAll() {
    return this.tokenModel.find().exec();
  }

  async findOne(id: string): Promise<Token> {
    if (!isValidObjectId(id)) {
      throw new NotFoundException(`Invalid token ID: ${id}`);
    }

    const token = await this.tokenModel.findById(id).exec();

    if (!token) {
      throw new NotFoundException(`Token with ID ${id} not found`);
    }

    return token;
  }

  async findByPlayerId(playerId: string): Promise<Token[]> {
    const tokens = await this.tokenModel.find({ playerId }).exec();

    if (!tokens || tokens.length === 0) {
      throw new NotFoundException(
        `No tokens found for player with ID ${playerId}`,
      );
    }
    return tokens;
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }
}
