import { Body, Controller, Delete, Get, HttpStatus, Param, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@project/util/util-core';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagRdo } from './rdo/tag.rdo';
import { TagsService } from './tags.service';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(
    private readonly tagsService: TagsService
  ) {}

  @ApiResponse({
    type: TagRdo,
    status: HttpStatus.OK,
    description: 'Tags list',
  })
  @Get()
  public all() {
    const tags = this.tagsService.all();
    return tags.map(item => fillObject(TagRdo, item));
  }
  
  @ApiResponse({
    type: TagRdo,
    status: HttpStatus.OK,
    description: 'Update tags'
  })
  @Put(':id')
  public update(@Param('id') id: string, @Body() tagData: CreateTagDto) {
    const tag = this.tagsService.update(id, tagData);
    return fillObject(TagRdo, tag);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'delete tag',
  })
  @Delete(':id')
  public destroy(@Param('id') id: string) {
    this.tagsService.destroy(id);
  }
}

