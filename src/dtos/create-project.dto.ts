import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateProjectDto {
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  description: string;
}

export default CreateProjectDto;
