import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PROJECT_REPOSITORY } from './project.provider';
import ProjectEntity from './project.entity';
import CreateAccountDto from '~/dtos/create-account.dto';
import CreateProjectDto from '~/dtos/create-project.dto';

@Injectable()
class ProjectService {
  constructor(
    @Inject(PROJECT_REPOSITORY)
    private repository: Repository<ProjectEntity>,
  ) {}

  /**
   *
   * @returns All accounts in the database
   */

  findAll(): Promise<ProjectEntity[]> {
    return this.repository.find();
  }

  findAllByOrganization(organization: string) {
    return this.repository.find({
      relations: ['organization'],
      where: {
        organization: {
          id: organization,
        },
      },
    });
  }

  findById(id: string, relations?: Array<'applications' | 'organization'>) {
    return this.repository.findOne({
      relations,
      where: {
        id: id,
      },
    });
  }

  /**
   *
   * @param email Email of the user to search
   * @returns A promise returned by the user or undefined
   */

  async existByEmail(email: string): Promise<boolean> {
    return (
      (
        await this.repository.find({
          where: {
            email: email,
          },
        })
      )?.length > 0
    );
  }

  async findByEmail(email: string): Promise<ProjectEntity | undefined> {
    return this.repository.findOne({
      where: {
        email,
      },
    });
  }

  async delete(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async create(obj: CreateProjectDto | ProjectEntity): Promise<ProjectEntity> {
    if (obj instanceof ProjectEntity) {
      return this.repository.save(obj);
    }
    const account = this.repository.create(obj);
    return this.repository.save(account);
  }
}

export default ProjectService;
