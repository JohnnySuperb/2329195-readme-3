import dayjs from "dayjs";
import { BasePost, PostPhoto, PostVideo, PostQuote, PostLink, PostText, PostType } from "@project/shared/types";

class BasePostEntity implements BasePost {
  public id: string;
  public title: string;
  public tags: string[];
  public type: PostType;
  public userId: string;
  public createdDate: number;
  public updatedDate: number;

  constructor(post: BasePost) {
    this.id = post.id;
    this.title = post.title;
    this.tags = post.tags;
    this.type = post.type;
    this.userId = post.userId;
    this.createdDate = post.createdDate;
    this.updatedDate = post.updatedDate;
  }

  public toObject() {
    return { ...this };
  }

  public setCreatedDate() {
    this.createdDate = dayjs().unix();
    return this;
  }
  public setUpdatedDate() {
    this.updatedDate = dayjs().unix();
    return this;
  }
}

export class PostTextEntity extends BasePostEntity {
  public anonce: string;

  constructor(post: PostText) {
    super(post);
    this.anonce = post.anonce;
  }
}

export class PostPhotoEntity extends BasePostEntity {
  public photo: string;

  constructor(post: PostPhoto) {
    super(post);
    this.photo = post.photo;
  }
}

export class PostLinkEntity extends BasePostEntity {
  public link: string;

  constructor(post: PostLink) {
    super(post);
    this.link = post.link;
  }
}

export class PostQuoteEntity extends BasePostEntity {
  public quote: string;

  constructor(post: PostQuote) {
    super(post);
    this.quote = post.quote;
  }
}

export class PostVideoEntity extends BasePostEntity {
  public video: string;

  constructor(post: PostVideo) {
    super(post);
    this.video = post.video;
  }
}

export type PostEntity = 
  | PostTextEntity
  | PostPhotoEntity
  | PostLinkEntity
  | PostQuoteEntity
  | PostVideoEntity