import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  constructor(
    private readonly postsRepository: PostsMemoryRepository
  ) {}
}
