import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ORGANIZATIONS_REPOSITORY } from './origanization.provider';
import Organization from './organization.entity';
import OrganizationDTO from '~/models/organization.dto';

@Injectable()
class RepositoryService {
  constructor(
    @Inject(ORGANIZATIONS_REPOSITORY)
    private repository: Repository<Organization>,
  ) {}

  async findAll(): Promise<Organization[]> {
    return await this.repository.find();
  }

  async findbyId(organizationId: string): Promise<Organization | undefined> {
    return await this.repository.findOne({ where: { id: organizationId } });
  }

  //async delete(): Promise<boolean> {}

  async create(organization: OrganizationDTO): Promise<Organization> {
    return await this.repository.save(organization);
  }
}

export default RepositoryService;
