import { Injectable } from '@nestjs/common';
import { IPost } from '@project/shared/types';
import { PostConnectionsTypes } from './posts-connections-types';
import { PostsMemoryRepository } from './posts-memory.repository';

@Injectable()
export class PostsService {
  constructor(
    private readonly postsRepository: PostsMemoryRepository
  ) {}

  private getConnectionType(type) {
    return PostConnectionsTypes.find(connectionType => connectionType.type === type);
  }

  public all(params): Promise<IPost[]> {
    return this.postsRepository.all(params);
  }

  public async create(postData): Promise<IPost> {
    const connectionType = this.getConnectionType(postData.type);
    const postEntity = new connectionType.entity(postData)
      .setCreatedDate()
      .setUpdatedDate();
    return await this.postsRepository.create(postEntity);
  }
  
  public async update(id: string, postData) {
    const connectionType = this.getConnectionType(postData.type);
    const postEntity = new connectionType.entity(postData)
      .setUpdatedDate();
    return await this.postsRepository.update(id, postEntity);
  }
  
  public destroy(id: string) {
    this.postsRepository.destroy(id);
  }

}
