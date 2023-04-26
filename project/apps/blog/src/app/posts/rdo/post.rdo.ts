import { ApiProperty } from "@nestjs/swagger";
import { BasePost, PostType } from "@project/shared/types";
import { Expose } from "class-transformer";

class BasePostRdo implements BasePost {
  @ApiProperty({
    description: "Post ID"
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: "Post title"
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: "List tags"
  })
  @Expose()
  public tags: string[];

  @ApiProperty({
    description: "Post type"
  })
  @Expose()
  public type: PostType;

  @ApiProperty({
    description: "User ID"
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: "Created date"
  })
  @Expose()
  public createdDate: number;

  @ApiProperty({
    description: "Updated date"
  })
  @Expose()
  public updatedDate: number;
}

export class PostTextRdo extends BasePostRdo {
  @ApiProperty({
    description: "anonce text"
  })
  @Expose()
  public anonce: string;
}

export class PostVideoRdo extends BasePostRdo {
  @ApiProperty({
    description: "link video"
  })
  @Expose()
  public anonce: string;
}

export class PostPhotoRdo extends BasePostRdo {
  @ApiProperty({
    description: "photo"
  })
  @Expose()
  public photo: string;
}

export class PostLinkRdo extends BasePostRdo {
  @ApiProperty({
    description: "link"
  })
  @Expose()
  public link: string;
}

export class PostQuoteRdo extends BasePostRdo {
  @ApiProperty({
    description: "quote"
  })
  @Expose()
  public quote: string;
}

export type PostRdo = 
  | PostTextRdo
  | PostLinkRdo
  | PostQuoteRdo
  | PostPhotoRdo
  | PostVideoRdo;
