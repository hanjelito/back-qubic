import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post()
  create(@Body() createTokenDto: CreateTokenDto) {
    return this.tokenService.create(createTokenDto);
  }

  @Get()
  async findAll() {
    return this.tokenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tokenService.findOne(id);
  }

  @Get('player/:playerId')
  async findByPlayerId(@Param('playerId') playerId: string) {
    return this.tokenService.findByPlayerId(playerId);
  }
}
