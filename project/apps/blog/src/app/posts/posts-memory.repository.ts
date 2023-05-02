import { Injectable } from '@nestjs/common';
import { IPost } from '@project/shared/types';
import { PostEntity } from './posts.entity';
import crypto from 'crypto';

@Injectable()
export class PostsMemoryRepository {
  private repository: IPost[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async all(params): Promise<IPost[]> {
    return this.repository;
  }

  public async create(postData: PostEntity): Promise<IPost> {
    const entry = { ...postData.toObject(), id: crypto.randomUUID() };
    this.repository.push(entry);
    return entry;
  }

  public async findById(id: string): Promise<IPost> {
    const post = this.repository.find((item) => item.id === id);
    return post ?? null;
  }

  public async update(id: string, postData: PostEntity): Promise<IPost> {
    this.repository = this.repository.map((item) => {
      if (item.id === id) {
        return { ...postData.toObject(), id };
      }

      return item;
    });

    return this.findById(id);
  }

  public async destroy(id: string): Promise<void> {
    this.repository = this.repository.filter((item) => item.id !== id);
  }
}
