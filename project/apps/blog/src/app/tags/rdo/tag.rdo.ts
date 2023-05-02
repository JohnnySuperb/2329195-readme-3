import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '@project/shared/types';

export class TagRdo implements Tag {
  @ApiProperty({
    description: 'tag Id',
  })
  public id: string;

  @ApiProperty({
    description: 'Tag name',
  })
  public title: string;
}
