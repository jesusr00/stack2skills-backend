import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import RepositorySource from '../repository-source/repository-source.entity';
import BaseEntity from '../base.entity';
import { FrameworkEntity, ProjectEntity } from '..';

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

  @ManyToOne(() => FrameworkEntity, (framework) => framework.applications)
  framework: FrameworkEntity;

  @ManyToOne(() => ProjectEntity, (project) => project.applications)
  project: ProjectEntity
}

export default Application;
