// src/ingestion/mock-ingestion.service.ts
import { Injectable } from '@nestjs/common';;
import { RedisService } from '../core/redis/redis.service';

@Injectable()
export class MockIngestionService {
  constructor(private redisService: RedisService) {}

  async triggerIngestion(documentId: string) {
    let retries = 3;
    while (retries > 0) {
      try {
        await this.redisService.getClient().set(`ingestion:${documentId}:status`, 'processing');
        setTimeout(async () => {
          const isSuccess = Math.random() > 0.3;
          const status = isSuccess ? 'completed' : 'failed';
          await this.redisService.getClient().set(`ingestion:${documentId}:status`, status);
        }, 5000);
  
        return 'processing';
      } catch (err) {
        retries--;
        if (retries === 0) {
          throw new Error('Ingestion failed after retries');
        }
      }
    }
  }
  

  async getIngestionStatus(documentId: string): Promise<string> {
    const client = this.redisService.getClient();
    const status = await client.get(`ingestion:${documentId}:status`);
    return status || 'not_found';
  }

  async getMockEmbedding(documentId: string): Promise<any> {
    return { documentId, embedding: [0.1, 0.2, 0.3, 0.4] };
  }
}