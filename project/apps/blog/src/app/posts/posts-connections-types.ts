import { 
  CreatePostTextDto, CreatePostVideoDto, CreatePostLinkDto, CreatePostPhotoDto, CreatePostQuoteDto
} from "./dto/create-post.dto";
import { PostLinkEntity, PostPhotoEntity, PostQuoteEntity, PostTextEntity, PostVideoEntity } from "./posts.entity";
import { PostTextRdo, PostLinkRdo, PostVideoRdo, PostPhotoRdo, PostQuoteRdo } from "./rdo/post.rdo";


export const PostConnectionsTypes = [
  {
    type: "Text",
    dto: CreatePostTextDto,
    rdo: PostTextRdo,
    entity: PostTextEntity,
  },
  {
    type: "Video",
    dto: CreatePostVideoDto,
    rdo: PostVideoRdo,
    entity: PostVideoEntity,
  },
  {
    type: "Photo",
    dto: CreatePostPhotoDto,
    rdo: PostPhotoRdo,
    entity: PostPhotoEntity,
  },
  {
    type: "Quote",
    dto: CreatePostQuoteDto,
    rdo: PostQuoteRdo,
    entity: PostQuoteEntity,
  },
  {
    type: "Link",
    dto: CreatePostLinkDto,
    rdo: PostLinkRdo,
    entity: PostLinkEntity,
  },
];