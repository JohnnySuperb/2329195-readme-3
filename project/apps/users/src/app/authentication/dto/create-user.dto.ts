import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1984-05-17',
  })
  public dateBirth: string;
  
  @ApiProperty({
    description: 'User first name',
    example: 'Eugene',
  })
  public firstname: string;
  
  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  public lastname: string;
  
  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public password: string;
}