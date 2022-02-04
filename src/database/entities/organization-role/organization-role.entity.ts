import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  ManyToMany,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import RepositorySource from '../repository-source/repository-source.entity';
import BaseEntity from '../base.entity';
import Account from '../account/account.entity';
import Organization from '../organization/organization.entity';

@Entity()
class OrganizationRole extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  accountId: string;

  @ManyToOne(() => Organization, (org) => org.rolesAssociated)
  organization: Organization;
}

export default OrganizationRole;
