// src/ingestion/mock-ingestion.controller.ts
import { Controller, Post, Param, Get } from '@nestjs/common';
import { MockIngestionService } from './mock-ingestion.service';

@Controller('ingestion')
export class MockIngestionController {
  constructor(private readonly ingestionService: MockIngestionService) {}

  @Post('trigger/:documentId')
  async triggerIngestion(@Param('documentId') documentId: string) {
    return this.ingestionService.triggerIngestion(documentId);
  }

  @Get('status/:documentId')
  async getIngestionStatus(@Param('documentId') documentId: string) {
    return this.ingestionService.getIngestionStatus(documentId);
  }

  @Get('embedding/:documentId')
  async getMockEmbedding(@Param('documentId') documentId: string) {
    return this.ingestionService.getMockEmbedding(documentId);
  }
}
