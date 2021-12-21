import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
} from 'typeorm';
import RepositorySource from '../repository-source/repository-source.entity';

@Entity()
class Organization extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    () => RepositorySource,
    (repositorySource) => repositorySource.organization,
  )
  repositorySources: RepositorySource[];
}

export default Organization;
