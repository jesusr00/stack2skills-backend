import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import RepoTypes from '~/database/models/repo-type';
import Organization from '../organization/organization.entity';

@Entity()
class RepositorySource extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  accessToken: string;

  @Column()
  type: RepoTypes;

  @ManyToOne(
    () => Organization,
    (organization) => organization.repositorySources,
  )
  organization: Organization;
}

export default RepositorySource;
