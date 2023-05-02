import { Like } from "@project/shared/types";

export class LikeEntity implements Like {
  id: string;
  postId: string;
  userId: string;

  constructor(like: Like) {
    this.id = like.id;
    this.postId = like.postId;
    this.userId = like.userId;
  }

  public toObject() {
    return { ...this };
  }
}