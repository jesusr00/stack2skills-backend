import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ApplicationEntity } from '..';
import BaseEntity from '../base.entity';
import Organization from '../organization/organization.entity';

@Entity()
class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => Organization, (organization) => organization.projects)
  organization: Organization;

  @OneToMany(() => ApplicationEntity, (application) => application.project)
  applications: ApplicationEntity[];
}

export default ProjectEntity;
