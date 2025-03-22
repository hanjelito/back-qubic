import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player, PlayerDocument } from './entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
  ) {}

  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  async findAll(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  async findOne(id: string): Promise<Player> {
    const player = await this.playerModel.findOne({ _id: id });
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
