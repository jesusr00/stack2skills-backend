import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateApplicationDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  repoUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  framework: string;

  @ApiProperty()
  @IsNotEmpty()
  project: string;
}

export default CreateApplicationDto;
