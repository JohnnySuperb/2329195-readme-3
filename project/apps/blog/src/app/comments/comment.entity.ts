import dayjs from 'dayjs';
import { Comment } from '@project/shared/types';

export class CommentEntity implements Comment {
  id: string;
  text: string;
  postId: string;
  userId: string;
  createdDate: number;

  constructor(comment: Comment) {
    this.id = comment.id;
    this.text = comment.text;
    this.postId = comment.postId;
    this.userId = comment.userId;
    this.createdDate = comment.createdDate;
  }

  public toObject() {
    return { ...this };
  }

  public setCreatedDate() {
    this.createdDate = dayjs().unix();
    return this;
  }
}