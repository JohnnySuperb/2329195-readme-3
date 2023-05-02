import { Injectable } from '@nestjs/common';
import { Like } from '@project/shared/types';
import { LikeEntity } from './likes.entity';

@Injectable()
export class LikesMemoryRepository {
  private repository: Like[] = [];

  public async create(likeData: LikeEntity): Promise<Like> {
    const entry = { ...likeData.toObject(), id: crypto.randomUUID() };
    this.repository.push(entry);
    return entry;
  }

  public async destroy(id: string): Promise<void> {
    this.repository = this.repository.filter((item) => item.id !== id);
  }

  public async count(postId: string): Promise<number> {
    const likes = this.repository.filter((item) => item.postId === postId);
    return likes.length;
  }
}
