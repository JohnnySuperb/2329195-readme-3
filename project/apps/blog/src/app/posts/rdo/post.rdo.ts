import { ApiProperty } from "@nestjs/swagger";
import { BasePost, PostType } from "@project/shared/types";
import { Expose } from "class-transformer";

export class BasePostRdo implements BasePost {
  @ApiProperty({
    description: "Post ID"
  })
  public id: string;

  @ApiProperty({
    description: "Post title"
  })
  public title: string;

  @ApiProperty({
    description: "List tags"
  })
  public tags: string[];

  @ApiProperty({
    description: "Post type"
  })
  public type: PostType;

  @ApiProperty({
    description: "User ID"
  })
  public userId: string;

  @ApiProperty({
    description: "Created date"
  })
  public createdDate: number;

  @ApiProperty({
    description: "Updated date"
  })
  public updatedDate: number;
}

export class PostTextRdo extends BasePostRdo {
  @ApiProperty({
    description: "anonce text",
  })
  @Expose()
  public anonce: string;
}

export class PostVideoRdo extends BasePostRdo {
  @ApiProperty({
    description: "link video",
  })
  @Expose()
  public video: string;
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
  | PostVideoRdo
  | PostPhotoRdo
  | PostQuoteRdo
  | PostLinkRdo;
