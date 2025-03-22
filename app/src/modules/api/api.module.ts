import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';

@Module({
  imports: [
    HttpModule,
    // ... otros módulos
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
