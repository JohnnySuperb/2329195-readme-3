import { Module } from '@nestjs/common';
import { LikesMemoryRepository } from './likes-memory.repository';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';

@Module({
  controllers: [LikesController],
  providers: [LikesService, LikesMemoryRepository]
})
export class LikesModule {}
