import { CRUDRepository } from '@project/util/util-types';
import { Comment } from '@project/shared/types';
import { Injectable } from '@nestjs/common';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentsMemoryRepository
  implements CRUDRepository<CommentEntity, string, Comment>
{
  private repository: Comment[] = [];

  public async findById(id: string): Promise<Comment> {
    const comment = this.repository.find((item) => item.id === id);
    return comment ?? null;
  }

  public async update(
    id: string,
    commentData: CommentEntity
  ): Promise<Comment> {
    this.repository = this.repository.map((item) => {
      if (item.id === id) {
        return { ...commentData.toObject(), id };
      }

      return item;
    });

    return this.findById(id);
  }
  public async destroy(id: string): Promise<void> {
    this.repository = this.repository.filter((item) => item.id !== id);
  }

  public async create(item: CommentEntity): Promise<Comment> {
    const entry = { ...item.toObject(), id: crypto.randomUUID() };
    this.repository.push(entry);
    return entry;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async all(params): Promise<Comment[]> {
    return this.repository;
  }
}
