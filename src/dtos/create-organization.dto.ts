import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateOrganizationDto {
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  description?: string;
}

export default CreateOrganizationDto;
