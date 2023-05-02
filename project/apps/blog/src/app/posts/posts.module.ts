import { Module } from '@nestjs/common';
import { PostsMemoryRepository } from './posts-memory.repository';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsMemoryRepository],
})
export class PostsModule {}
