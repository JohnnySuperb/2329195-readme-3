import { Injectable } from '@nestjs/common';
import { Tag } from '@project/shared/types';
import { CRUDRepository } from '@project/util/util-types';
import { TagEntity } from './tags.entity';

@Injectable()
export class TagsMemoryRepository
  implements CRUDRepository<TagEntity, string, Tag>
{
  private repository: Tag[] = [];

  public async findById(id: string): Promise<Tag> {
    const tag = this.repository.find((item) => item.id === id);
    return tag ?? null;
  }

  public async create(item: TagEntity): Promise<Tag> {
    const entry = { ...item.toObject(), id: crypto.randomUUID() };
    this.repository.push(entry);
    return entry;
  }

  public async update(id: string, tagData: TagEntity): Promise<Tag> {
    this.repository = this.repository.map((item) => {
      if (item.id === id) {
        return { ...tagData.toObject(), id: id };
      }

      return item;
    });

    return this.findById(id);
  }

  public async destroy(id: string): Promise<void> {
    this.repository = this.repository.filter((item) => item.id !== id);
  }

  public all(): Tag[] {
    return this.repository;
  }
}
