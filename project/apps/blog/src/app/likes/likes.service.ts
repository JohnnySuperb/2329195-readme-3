import { Injectable } from "@nestjs/common";
import { LikesMemoryRepository } from "./likes-memory.repository";
import { LikeEntity } from "./likes.entity";
import { CreateLikeDto } from "./dto/create-like.dto";
import { Like } from "@project/shared/types";

@Injectable()
export class LikesService {
  constructor(
    private readonly likesRepository: LikesMemoryRepository
  ) {}

  public create(likeData: CreateLikeDto): Promise<Like> {
    const likeEntity = new LikeEntity(likeData);
    return this.likesRepository.create(likeEntity);
  }

  public destroy(id: string) {
    this.likesRepository.destroy(id);
  }

  public async count(postId: string): Promise<number> {
    return await this.likesRepository.count(postId);
  }
}