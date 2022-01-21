import { BaseEntity, Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';
import Organization from '../organization/organization.entity';

@Entity()
class RepositorySource extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  host: string;

  @Column()
  accessToken: string;

  @Column()
  type: string; // Aqui hay q cambiar a RepoType

  @ManyToOne( ()=> Organization, organization => organization.repositorySources)
  organization: Organization;
}

export default RepositorySource;
