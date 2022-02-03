import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
} from 'typeorm';
import RepositorySource from '../repository-source/repository-source.entity';

@Entity()
class Application extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  repoUrl: string;

  @OneToOne(() => RepositorySource)
  source: RepositorySource;
}

export default Application;
