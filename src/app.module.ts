import { Module } from '@nestjs/common';
import { MockIngestionModule } from './mock-ingestion/mock-ingestion.module';
import { RedisModule } from './core/redis/redis.module';

@Module({
  imports: [MockIngestionModule, RedisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
