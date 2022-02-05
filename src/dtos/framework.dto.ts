import { ApiProperty } from '@nestjs/swagger';
import BaseEntityDto from './base-entity.dto';

class FrameworkDto extends BaseEntityDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ nullable: true })
  description?: string;

  @ApiProperty()
  manifestPath: string;
}

export default FrameworkDto;
