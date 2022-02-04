import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RepositorySourceService } from '~/database/entities/repository-source';
import RepositorySource from '~/database/entities/repository-source/repository-source.entity';
import CreateRepositorySourceDto from '~/dtos/create-repository-source.dto';
import { JwtAuthGuard } from '~/modules/auth/guards/jwt-auth.guard';

@Controller('repository')
@UseGuards(JwtAuthGuard)
@ApiTags('Repository')
class RepositorySourceController {
  constructor(private repositorySourceService: RepositorySourceService) {}

  @Get()
  GetAll() {
    return this.repositorySourceService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.repositorySourceService.findbyId(id);
  }

  @Post()
  create(@Body() body: CreateRepositorySourceDto) {
    return this.repositorySourceService.create(body);
  }
}

export default RepositorySourceController;
