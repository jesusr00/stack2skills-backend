import { Controller, Get, Type, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags, OmitType } from '@nestjs/swagger';
import { FrameworkService } from '~/database/entities';
import FrameworkDto from '~/dtos/framework.dto';
import { JwtAuthGuard } from '~/modules/auth';

@Controller('framework')
@UseGuards(JwtAuthGuard)
@ApiTags('Framework')
class FrameworkController {
  constructor(private frameworkService: FrameworkService) {}

  @Get()
  @ApiOkResponse({
    description: 'Get all enabled frameworks',
    type: OmitType(FrameworkDto, ['createdAt', 'updatedAt', 'manifestPath']),
  })
  async GetAll() {
    const frameworks = await this.frameworkService.findAll();

    return frameworks.map((framework) => ({
      id: framework.id,
      name: framework.name,
      description: framework.description,
    }));
  }
}

export default FrameworkController;
