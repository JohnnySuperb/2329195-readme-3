import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [PostsModule, CommentsModule, LikesModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
