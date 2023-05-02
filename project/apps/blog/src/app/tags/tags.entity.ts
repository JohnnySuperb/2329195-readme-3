import { Tag } from '@project/shared/types';

export class TagEntity implements Tag {
  public id: string;
  public title: string;

  constructor(tag: Tag) {
    this.id = tag.id;
    this.title = tag.title;
  }

  public toObject() {
    return { ...this };
  }
}
