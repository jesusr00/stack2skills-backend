import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateProjectDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  description: string;
}

export default CreateProjectDto;
