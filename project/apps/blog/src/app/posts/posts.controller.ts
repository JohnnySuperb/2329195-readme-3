import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  HttpStatus,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostConnectionsTypes } from './posts-connections-types';
import { PostsService } from './posts.service';
import { fillObject } from '@project/util/util-core';
import { BasePostRdo } from './rdo/post.rdo';
import { ClassConstructor } from 'class-transformer';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  private transformPostToDto(post) {
    const postConnectionType = PostConnectionsTypes.find(
      (connectionType) => connectionType.type === post.type
    );

    if (postConnectionType) {
      return fillObject(
        postConnectionType.rdo as unknown as ClassConstructor<BasePostRdo>,
        post
      );
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List posts',
  })
  @Get('/')
  public async all(@Query() params) {
    const posts = await this.postsService.all(params);
    return posts.map((post) => this.transformPostToDto(post));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Created post',
  })
  @Post()
  public async create(@Body() postData: CreatePostDto) {
    const post = await this.postsService.create(postData);
    return this.transformPostToDto(post);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post updated',
  })
  @Put(':id')
  public update(@Param('id') id: string, @Body() postData: CreatePostDto) {
    const post = this.postsService.update(id, postData);
    return this.transformPostToDto(post);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post deleted',
  })
  @Delete(':id')
  public destroy(@Param('id') id: string) {
    this.postsService.destroy(id);
    return true;
  }
}
