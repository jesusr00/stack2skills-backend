import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ORGANIZATIONS_ROLE_REPOSITORY } from './organization-role.provider';
import OrganizationRole from './organization-role.entity';
import { WhereExpression } from '~/types';

@Injectable()
class OrganizationRoleService {
  constructor(
    @Inject(ORGANIZATIONS_ROLE_REPOSITORY)
    private repository: Repository<OrganizationRole>,
  ) {}

  async findAll(where?: WhereExpression<OrganizationRole>) {
    return await this.repository.find();
  }

  async findById(
    organizationId: string,
  ): Promise<OrganizationRole | undefined> {
    return await this.repository.findOne({ where: { id: organizationId } });
  }

  async create(organization: OrganizationRole): Promise<OrganizationRole> {
    return await this.repository.save(organization);
  }

  async save(organizationRole: OrganizationRole) {
    return await this.repository.save(organizationRole);
  }
}

export default OrganizationRoleService;
