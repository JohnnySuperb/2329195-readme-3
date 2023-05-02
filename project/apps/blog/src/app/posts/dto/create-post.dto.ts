import { ApiProperty } from '@nestjs/swagger';
import { PostType } from '@project/shared/types';

class BasePostDto {
  @ApiProperty({
    description: 'Post title',
  })
  public title: string;

  @ApiProperty({
    description: 'Post type',
  })
  public type: PostType;

  @ApiProperty({
    description: 'List tags',
  })
  public tags: string;

  @ApiProperty({
    description: 'User ID',
  })
  public userId: string;
}

export class CreatePostTextDto extends BasePostDto {
  @ApiProperty({
    description: 'Text anonce',
  })
  public anonce: string;
}

export class CreatePostVideoDto extends BasePostDto {
  @ApiProperty({
    description: 'video-link',
  })
  public video: string;
}

export class CreatePostPhotoDto extends BasePostDto {
  @ApiProperty({
    description: 'Photo',
  })
  public photo: string;
}

export class CreatePostQuoteDto extends BasePostDto {
  @ApiProperty({
    description: 'Quote',
  })
  public quote: string;
}

export class CreatePostLinkDto extends BasePostDto {
  @ApiProperty({
    description: 'Link',
  })
  public link: string;
}

export type CreatePostDto =
  | CreatePostTextDto
  | CreatePostVideoDto
  | CreatePostPhotoDto
  | CreatePostQuoteDto
  | CreatePostLinkDto;
