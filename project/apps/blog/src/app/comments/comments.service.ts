import { Injectable } from "@nestjs/common";
import { CommentEntity } from "./comment.entity";
import { CommentsMemoryRepository } from "./comments-memory.repository";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsMemoryRepository
  ) {}

  public create(commentData: CreateCommentDto) {
    const commentEntity = new CommentEntity(commentData).setCreatedDate();
    return this.commentsRepository.create(commentEntity);
  }

  public destroy(id: string): void {
    this.commentsRepository.destroy(id);
  }

  public async all(params) {
    return await this.commentsRepository.all(params);
  }
}