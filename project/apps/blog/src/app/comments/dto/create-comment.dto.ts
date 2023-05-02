import {ApiProperty} from '@nestjs/swagger';

export class CreateCommentDto {
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
}