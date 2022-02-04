import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { REPOSITORYS_SOURCE_REPOSITORY } from './repository-source.provider';
import RepositorySource from './repository-source.entity';
import CreateRepositorySourceDto from '~/dtos/create-repository-source.dto';


@Injectable()
class RepositoryService {
  constructor(
    @Inject(REPOSITORYS_SOURCE_REPOSITORY)
    private repository: Repository<RepositorySource>,
  ) {}

  async findAll(): Promise<RepositorySource[]> {
    return await this.repository.find();
  }

  async findbyId(repoId: string): Promise<RepositorySource | undefined> {
    return await this.repository.findOne({ where: { id: repoId } });
  }

  //async delete(): Promise<boolean> {}

  async create(dto: CreateRepositorySourceDto): Promise<RepositorySource> {
    const repository = this.repository.create(dto);
    return await this.repository.save(repository);
  }
}

export default RepositoryService;
