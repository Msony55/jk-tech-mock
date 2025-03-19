import { Module } from '@nestjs/common';
import { MockIngestionService } from './mock-ingestion.service';
import { MockIngestionController } from './mock-ingestion.controller';

@Module({
  providers: [MockIngestionService],
  controllers: [MockIngestionController]
})
export class MockIngestionModule {}
