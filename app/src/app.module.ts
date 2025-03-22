import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './modules/api/api.module';
import { PlayerModule } from './modules/player/player.module';
import { TokenModule } from './modules/token/token.module';
import { FundingModule } from './modules/funding/funding.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { AdminModule } from './modules/admin/admin.module';
import { SearchModule } from './modules/search/search.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => ({
        uri: 'mongodb://root:jTKPT%401F3.y@mongo:27017/nestdb?authSource=admin', // 🔐 conexión hardcoded por ahora
      }),
    }),
    ApiModule,
    PlayerModule,
    TokenModule,
    FundingModule,
    WalletModule,
    AdminModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
