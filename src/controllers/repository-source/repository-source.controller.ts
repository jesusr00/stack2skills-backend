import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RepositorySourceDTO } from '~/database/dto/repository-source.dto';
import { RepositorySourceService } from '~/database/entities/repository-source';

@Controller('repositorySource')
export default class RepositoySourceController {
  constructor(private repositorySourceService: RepositorySourceService) {}

  @Get('')
  findAllRepositorySources() {
    return this.repositorySourceService.findAll();
  }

  @Get(':id')
  findRepositorySourcebyId(@Param('id') id: string) {
    return this.repositorySourceService.findbyId(id);
  }

  @Post()
  createNewRepositorySource(@Body() newRepo: RepositorySourceDTO) {
    return this.repositorySourceService.create(newRepo);
  }
}
