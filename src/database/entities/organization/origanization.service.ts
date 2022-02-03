import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ORGANIZATIONS_REPOSITORY } from './origanization.provider';
import Organization from './organization.entity';
import CreateOrganizationDto from '~/dtos/create-organization.dto';
import OrganizationDto from '~/dtos/organization.dto';

@Injectable()
class RepositoryService {
  constructor(
    @Inject(ORGANIZATIONS_REPOSITORY)
    private repository: Repository<Organization>,
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async findById(organizationId: string): Promise<Organization | undefined> {
    return await this.repository.findOne({ where: { id: organizationId } });
  }

  //async delete(): Promise<boolean> {}

  async create(organization: CreateOrganizationDto): Promise<Organization> {
    return await this.repository.save(organization);
  }
}

export default RepositoryService;
