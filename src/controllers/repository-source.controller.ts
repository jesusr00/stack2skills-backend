import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RepositorySourceService } from '~/database/entities/repository-source';
import RepositorySource from '~/database/entities/repository-source/repository-source.entity';
import CreateRepositorySourceDto from '~/dtos/create-repository-source.dto';

@Controller('repository')
@ApiTags('Repository')
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
  create(@Body() body: CreateRepositorySourceDto): Promise<RepositorySource> {
    return this.repositorySourceService.create(body);
  }
}

export default RepositorySourceController;
