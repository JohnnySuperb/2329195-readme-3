import {ApiProperty} from '@nestjs/swagger';
import { Comment } from '@project/shared/types';

export class CommentRdo implements Comment {
  @ApiProperty({
    description: 'comment Id'
  })
  public id: string;

  @ApiProperty({
    description: 'text comment'
  })
  public text: string;

  @ApiProperty({
    description: 'post Id'
  })
  public postId: string;

  @ApiProperty({
    description: 'user Id'
  })
  public userId: string;

  @ApiProperty({
    description: 'created date'
  })
  public createdDate: number;

}