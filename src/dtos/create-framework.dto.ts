import { ApiProperty } from '@nestjs/swagger';

class CreateFrameworkDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}

export default CreateFrameworkDto;
