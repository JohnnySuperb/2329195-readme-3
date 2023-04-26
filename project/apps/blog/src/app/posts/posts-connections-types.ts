import { CreatePostTextDto } from "./dto/create-post.dto";


export const PostConnectionsTypes = [
  {
    type: "Text",
    dto: CreatePostTextDto,
    rdo: PostTextRdo,
    entity: PostTextEntity,
  }
]