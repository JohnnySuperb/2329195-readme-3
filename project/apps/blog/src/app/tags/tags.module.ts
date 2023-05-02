import { Module } from '@nestjs/common';
import { TagsMemoryRepository } from './tags-memory.repository';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

@Module({
  controllers: [TagsController],
  providers: [TagsService, TagsMemoryRepository],
})
export class TagsModule {}
