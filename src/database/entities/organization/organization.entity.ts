import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import RepositorySource from '../repository-source/repository-source.entity';
import BaseEntity from '../base.entity';
import Account from '../account/account.entity';
import { OrganizationRoleEntity } from '../organization-role';

@Entity()
class Organization extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(
    () => RepositorySource,
    (repositorySource) => repositorySource.organization,
  )
  repositorySources: RepositorySource[];

  @OneToMany(() => OrganizationRoleEntity, (orgRole) => orgRole.organization)
  rolesAssociated: OrganizationRoleEntity[];
}

export default Organization;
