import { Test, TestingModule } from '@nestjs/testing';
import { MockIngestionService } from './mock-ingestion.service';

describe('MockIngestionService', () => {
  let service: MockIngestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockIngestionService],
    }).compile();

    service = module.get<MockIngestionService>(MockIngestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
