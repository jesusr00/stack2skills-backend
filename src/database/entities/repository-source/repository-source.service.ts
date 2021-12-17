import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { REPOSITORYS_SOURCE_REPOSITORY } from './repository-source.provider';
import RepositorySource from './repository-source.entity';
import { RepositorySourceDTO } from '~/database/dto/repository-source.dto';

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

  async create(newRepoDTO: RepositorySourceDTO): Promise<RepositorySource> {
    return await this.repository.save(newRepoDTO);
  }
}

export default RepositoryService;
