import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RepositorySourceService } from '~/database/entities/repository-source';
import RepositorySource from '~/database/entities/repository-source/repository-source.entity';
import { RepositorySourceDTO } from '~/models';

@Controller('repository')
class RepositorySourceController {
  constructor(private repositorySourceService: RepositorySourceService) {}

  @Get()
  GetAll(): Promise<RepositorySource[]> {
    return this.repositorySourceService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Promise<RepositorySource> {
    return this.repositorySourceService.findbyId(id);
  }

  @Post()
  create(@Body() body): Promise<RepositorySource> {
    const newRepository = body;
    return this.repositorySourceService.create(newRepository);
  }
}

export default RepositorySourceController;
