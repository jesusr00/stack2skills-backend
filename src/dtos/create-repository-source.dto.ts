import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import RepoTypes from '~/database/models/repo-type';

class CreateRepositorySourceDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  url: string;

  @IsNotEmpty()
  @ApiProperty()
  accessToken: string;

  @IsNotEmpty()
  @ApiProperty()
  type: RepoTypes;
}

export default CreateRepositorySourceDto;
