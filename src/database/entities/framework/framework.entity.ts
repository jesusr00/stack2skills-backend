import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { ApplicationEntity } from '..';
import BaseEntity from '../base.entity';

@Entity()
class Framework extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  manifestPath: string;

  @OneToMany(() => ApplicationEntity, (application) => application.framework)
  applications: ApplicationEntity;
}

export default Framework;
