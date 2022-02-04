import { Inject, Injectable } from '@nestjs/common';
import {
  FindConditions,
  FindManyOptions,
  ObjectLiteral,
  Repository,
} from 'typeorm';
import { ORGANIZATIONS_REPOSITORY } from './organization.provider';
import Organization from './organization.entity';
import CreateOrganizationDto from '~/dtos/create-organization.dto';
import OrganizationDto from '~/dtos/organization.dto';
import { WhereExpression } from '~/types';

@Injectable()
class RepositoryService {
  constructor(
    @Inject(ORGANIZATIONS_REPOSITORY)
    private repository: Repository<Organization>,
  ) {}

  async findAll(options: FindManyOptions<Organization>) {
    return await this.repository.find({
      ...options,
    });
  }

  async findById(organizationId: string, accountId: string) {
    return this.getQueryBuilder()
      .innerJoinAndSelect('organization.rolesAssociated', 'rolesAssociated')
      .where('organization.id = :id', {
        id: organizationId,
      })
      .andWhere('rolesAssociated.accountId = :accountId', {
        accountId,
      })
      .getOne();
  }

  findAllByAccountId(id: string) {
    return this.getQueryBuilder()
      .innerJoinAndSelect('organization.rolesAssociated', 'rolesAssociated')
      .where('rolesAssociated.accountId = :accountId', { accountId: id })
      .getMany();
  }

  //async delete(): Promise<boolean> {}

  async create(dto: CreateOrganizationDto): Promise<Organization> {
    var organization = await this.repository.create(dto);
    return this.save(organization);
  }

  async save(organization: Organization) {
    return await this.repository.save(organization);
  }

  getQueryBuilder() {
    return this.repository.createQueryBuilder('organization');
  }
}

export default RepositoryService;
