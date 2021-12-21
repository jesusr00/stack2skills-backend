import RepositorySource from '~/database/entities/repository-source/repository-source.entity';

export default interface OrganizationDTO {
  readonly name: string;
  readonly repositorySources: RepositorySource[];
}
