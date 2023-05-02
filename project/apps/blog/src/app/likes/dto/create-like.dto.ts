import { ApiProperty } from '@nestjs/swagger';

export class CreateLikeDto {
  @ApiProperty({
    description: 'Post Id',
  })
  public postId: string;

  @ApiProperty({
    description: 'User Id',
  })
  public userId: string;
}
