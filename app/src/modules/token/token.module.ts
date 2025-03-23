import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { TokenSchema } from './entities/token.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Token', schema: TokenSchema, collection: 'token' },
    ]),
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
