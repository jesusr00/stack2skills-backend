import { ApiProperty } from '@nestjs/swagger';

class OrganizationDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description?: string;
}

export default OrganizationDto;
