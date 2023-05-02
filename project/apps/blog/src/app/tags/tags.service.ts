import { Injectable } from '@nestjs/common';
import { TagEntity } from './tags.entity';
import { TagsMemoryRepository } from './tags-memory.repository';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from '@project/shared/types';

@Injectable()
export class TagsService {
  constructor(private readonly tagsRepository: TagsMemoryRepository) {}

  public all(): Tag[] {
    return this.tagsRepository.all();
  }

  public create(item: CreateTagDto): Promise<Tag> {
    const tagEntity = new TagEntity(item);
    return this.tagsRepository.create(tagEntity);
  }

  public update(id: string, item: CreateTagDto): Promise<Tag> {
    const tagEntity = new TagEntity(item);
    return this.tagsRepository.update(id, tagEntity);
  }

  public destroy(id: string) {
    this.tagsRepository.destroy(id);
  }
}
