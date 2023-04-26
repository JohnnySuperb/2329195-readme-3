import { CRUDRepository } from '@project/util/util-types';
import { BlogUserEntity } from './blog-user.entity';
import { User } from '@project/shared/types';
import { Injectable } from '@nestjs/common';
import * as crypto from 'node:crypto';

@Injectable()
export class BlogUserMemoryRepository implements CRUDRepository<BlogUserEntity, string, User> {
  private repository: User[] = [];

  public async create(item: BlogUserEntity): Promise<User> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;

    return entry;
  }

  public async findById(id: string): Promise<User | null> {
    const user = this.repository.find(user => user._id === id);
    return user ?? null;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = this.repository.find(user => user.email === email);
    return user ?? null;
  }

  public async destroy(id: string): Promise<void> {
    this.repository = this.repository.filter(user => user._id !== id);
  }

  public async update(id: string, item: BlogUserEntity): Promise<User> {
    this.repository.map(user => {
      if (user._id === id) {
        return {...item.toObject(), _id: id};
      }

      return user;
    });
    
    return this.findById(id);
  }
}