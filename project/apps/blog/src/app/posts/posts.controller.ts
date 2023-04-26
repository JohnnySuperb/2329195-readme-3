import { Controller, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger/dist';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}

  private transformPostToDto(post) {
    const postConnectionType = PostConnectionsTypes.find(connectionType => connectionType.type === post.type);

    if (postConnectionType) {
      return fillObject(postConnectionType.rdo, post);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List posts',
  });
  Get()
  public async findAll
}
