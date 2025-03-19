import { Test, TestingModule } from '@nestjs/testing';
import { MockIngestionController } from './mock-ingestion.controller';

describe('MockIngestionController', () => {
  let controller: MockIngestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockIngestionController],
    }).compile();

    controller = module.get<MockIngestionController>(MockIngestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
